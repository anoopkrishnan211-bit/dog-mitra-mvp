const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const { ApiError } = require("../../utils/apiError");
const { signToken } = require("../../middlewares/auth");
const { Staff } = require("../../../models");
const AuthSession = require("../../../models/AuthSession");
const PasswordResetToken = require("../../../models/PasswordResetToken");

const MAX_FAILED_ATTEMPTS = 5;
const LOCK_MINUTES = 15;
const REFRESH_TOKEN_TTL_DAYS = 30;
const REMEMBER_ME_TTL_DAYS = 90;

function hashToken(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function createRandomToken(bytes = 32) {
  return crypto.randomBytes(bytes).toString("hex");
}

function getExpiryDate(days) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
}

function isLocked(user) {
  return user.lockUntil && user.lockUntil.getTime() > Date.now();
}

function buildAuthPayload(user) {
  return { sub: String(user._id), role: user.role, name: user.name, username: user.username, email: user.email };
}

async function recordLoginHistory(userId, action, meta = {}) {
  const update = {
    $push: {
      loginHistory: {
        action,
        success: action !== "failed_login",
        ip: meta.ip,
        userAgent: meta.userAgent,
      },
    },
  };
  if (action === "login") update.$set = { lastLoginAt: new Date(), failedLoginAttempts: 0, lockUntil: null };
  if (action === "logout") update.$set = { ...(update.$set || {}), lastLogoutAt: new Date() };
  if (action === "failed_login") update.$inc = { failedLoginAttempts: 1 };
  if (action === "password_reset") update.$set = { ...(update.$set || {}), failedLoginAttempts: 0, lockUntil: null };
  await Staff.updateOne({ _id: userId }, update);
}

async function ensureAdminSeed({ name, username, email, phone, password }) {
  const existingAdmin = await Staff.findOne({ role: "admin" }).lean();
  if (existingAdmin) return existingAdmin;
  const passwordHash = await bcrypt.hash(password, 12);
  return Staff.create({ name, username, email, phone, role: "admin", permissions: ["*"], passwordHash, active: true });
}

async function registerAdmin({ name, username, email, phone, password }) {
  const existing = await Staff.findOne({ $or: [{ email }, { username }, { phone }] }).lean();
  if (existing) throw new ApiError(409, "Account already exists");
  const passwordHash = await bcrypt.hash(password, 12);
  return Staff.create({ name, username, email, phone, role: "admin", permissions: ["*"], passwordHash, active: true });
}

async function login({ identifier, password, rememberMe = false }, meta = {}) {
  const user = await Staff.findOne({ $or: [{ email: identifier }, { username: identifier }, { phone: identifier }] }).select("+passwordHash +failedLoginAttempts +lockUntil");
  if (!user) throw new ApiError(401, "Invalid credentials");
  if (!user.active) throw new ApiError(403, "Account is inactive");
  if (isLocked(user)) throw new ApiError(423, "Account is locked. Please try again later.");

  const ok = await bcrypt.compare(password, user.passwordHash || "");
  if (!ok) {
    await recordLoginHistory(user._id, "failed_login", meta);
    const updated = await Staff.findById(user._id).select("+failedLoginAttempts");
    if ((updated?.failedLoginAttempts || 0) >= MAX_FAILED_ATTEMPTS - 1) {
      await Staff.updateOne({ _id: user._id }, { $set: { lockUntil: new Date(Date.now() + LOCK_MINUTES * 60 * 1000) } });
      throw new ApiError(423, "Account locked due to too many failed attempts");
    }
    throw new ApiError(401, "Invalid credentials");
  }

  const accessToken = signToken(buildAuthPayload(user));
  const refreshToken = createRandomToken();
  await AuthSession.create({
    staffId: user._id,
    refreshTokenHash: hashToken(refreshToken),
    expiresAt: getExpiryDate(rememberMe ? REMEMBER_ME_TTL_DAYS : REFRESH_TOKEN_TTL_DAYS),
    ip: meta.ip,
    userAgent: meta.userAgent,
    rememberMe,
  });
  await recordLoginHistory(user._id, "login", meta);
  return {
    accessToken,
    refreshToken,
    tokenType: "Bearer",
    expiresIn: "15m",
    user: { id: user._id, name: user.name, username: user.username, email: user.email, phone: user.phone, role: user.role },
  };
}

async function logout({ refreshToken }) {
  if (!refreshToken) return { message: "Logged out" };
  await AuthSession.updateOne({ refreshTokenHash: hashToken(refreshToken), revokedAt: null }, { $set: { revokedAt: new Date(), revokedReason: "logout" } });
  return { message: "Logged out" };
}

async function refreshTokens({ refreshToken }, meta = {}) {
  if (!refreshToken) throw new ApiError(401, "Refresh token required");
  const tokenHash = hashToken(refreshToken);
  const session = await AuthSession.findOne({ refreshTokenHash: tokenHash, revokedAt: null });
  if (!session || session.expiresAt.getTime() <= Date.now()) throw new ApiError(401, "Invalid refresh token");
  const user = await Staff.findById(session.staffId);
  if (!user || !user.active) throw new ApiError(403, "Account inactive");
  const nextRefreshToken = createRandomToken();
  session.refreshTokenHash = hashToken(nextRefreshToken);
  session.expiresAt = getExpiryDate(session.rememberMe ? REMEMBER_ME_TTL_DAYS : REFRESH_TOKEN_TTL_DAYS);
  session.ip = meta.ip || session.ip;
  session.userAgent = meta.userAgent || session.userAgent;
  await session.save();
  return { accessToken: signToken(buildAuthPayload(user)), refreshToken: nextRefreshToken, tokenType: "Bearer", user: { id: user._id, name: user.name, username: user.username, email: user.email, role: user.role } };
}

async function forgotPassword({ identifier }, meta = {}) {
  const user = await Staff.findOne({ $or: [{ email: identifier }, { username: identifier }, { phone: identifier }] });
  if (!user) return { message: "If the account exists, a reset link was created." };
  const rawToken = createRandomToken(24);
  await PasswordResetToken.create({ staffId: user._id, tokenHash: hashToken(rawToken), expiresAt: getExpiryDate(1), requestedIp: meta.ip, requestedUserAgent: meta.userAgent });
  return { message: "If the account exists, a reset link was created.", resetToken: rawToken };
}

async function resetPassword({ token, password }) {
  const entry = await PasswordResetToken.findOne({ tokenHash: hashToken(token), usedAt: null });
  if (!entry || entry.expiresAt.getTime() <= Date.now()) throw new ApiError(400, "Invalid or expired reset token");
  const passwordHash = await bcrypt.hash(password, 12);
  await Staff.updateOne({ _id: entry.staffId }, { $set: { passwordHash, passwordChangedAt: new Date(), failedLoginAttempts: 0, lockUntil: null } });
  entry.usedAt = new Date();
  await entry.save();
  await AuthSession.updateMany({ staffId: entry.staffId, revokedAt: null }, { $set: { revokedAt: new Date(), revokedReason: "password_reset" } });
  await recordLoginHistory(entry.staffId, "password_reset");
  return { message: "Password reset successful" };
}

async function changePassword({ userId, currentPassword, newPassword }) {
  const user = await Staff.findById(userId).select("+passwordHash");
  if (!user) throw new ApiError(404, "User not found");
  const ok = await bcrypt.compare(currentPassword, user.passwordHash || "");
  if (!ok) throw new ApiError(401, "Current password is incorrect");
  user.passwordHash = await bcrypt.hash(newPassword, 12);
  user.passwordChangedAt = new Date();
  await user.save();
  await AuthSession.updateMany({ staffId: user._id, revokedAt: null }, { $set: { revokedAt: new Date(), revokedReason: "password_changed" } });
  return { message: "Password changed successfully" };
}

async function getSessions(userId) {
  return AuthSession.find({ staffId: userId }).sort("-createdAt").lean();
}

async function revokeSession(sessionId, userId) {
  const session = await AuthSession.findOneAndUpdate({ _id: sessionId, staffId: userId, revokedAt: null }, { $set: { revokedAt: new Date(), revokedReason: "revoked" } }, { new: true });
  if (!session) throw new ApiError(404, "Session not found");
  return session;
}

module.exports = {
  ensureAdminSeed,
  registerAdmin,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  changePassword,
  getSessions,
  revokeSession,
};
