const { z } = require("zod");
const { catchAsync } = require("../../utils/catchAsync");
const { login, registerAdmin, logout, refreshTokens, forgotPassword, resetPassword, changePassword, getSessions, revokeSession } = require("./auth.service");

const loginSchema = z.object({
  identifier: z.string().min(3),
  password: z.string().min(8),
  rememberMe: z.boolean().optional(),
});

const registerSchema = loginSchema.extend({
  name: z.string().min(2).max(120),
  username: z.string().min(3).max(40),
  phone: z.string().min(7).max(20),
  identifier: z.string().optional(),
});

const forgotSchema = z.object({ identifier: z.string().min(3) });
const resetSchema = z.object({ token: z.string().min(10), password: z.string().min(8) });
const changeSchema = z.object({ currentPassword: z.string().min(8), newPassword: z.string().min(8) });

const authController = {
  login: catchAsync(async (req, res) => {
    const body = loginSchema.parse(req.body);
    const result = await login(body, { ip: req.ip, userAgent: req.headers["user-agent"] });
    res.status(200).json(result);
  }),
  registerAdmin: catchAsync(async (req, res) => {
    const body = registerSchema.parse(req.body);
    const result = await registerAdmin(body);
    res.status(201).json(result);
  }),
  logout: catchAsync(async (req, res) => {
    const result = await logout({ refreshToken: req.body.refreshToken });
    res.status(200).json(result);
  }),
  refresh: catchAsync(async (req, res) => {
    const result = await refreshTokens({ refreshToken: req.body.refreshToken }, { ip: req.ip, userAgent: req.headers["user-agent"] });
    res.status(200).json(result);
  }),
  forgotPassword: catchAsync(async (req, res) => {
    const body = forgotSchema.parse(req.body);
    const result = await forgotPassword(body, { ip: req.ip, userAgent: req.headers["user-agent"] });
    res.status(200).json(result);
  }),
  resetPassword: catchAsync(async (req, res) => {
    const body = resetSchema.parse(req.body);
    const result = await resetPassword(body);
    res.status(200).json(result);
  }),
  changePassword: catchAsync(async (req, res) => {
    const body = changeSchema.parse(req.body);
    const result = await changePassword({ ...body, userId: req.user.sub });
    res.status(200).json(result);
  }),
  sessions: catchAsync(async (req, res) => {
    const result = await getSessions(req.user.sub);
    res.status(200).json(result);
  }),
  revokeSession: catchAsync(async (req, res) => {
    const result = await revokeSession(req.params.id, req.user.sub);
    res.status(200).json(result);
  }),
};

module.exports = { authController };
