const bcrypt = require("bcryptjs");
const { ApiError } = require("../../utils/apiError");
const { signToken } = require("../../middlewares/auth");
const { Staff } = require("../../../models");

async function registerAdmin({ name, email, phone, password }) {
  const existing = await Staff.findOne({ email }).lean();
  if (existing) throw new ApiError(409, "Email already exists");
  const passwordHash = await bcrypt.hash(password, 12);
  const staff = await Staff.create({
    name,
    email,
    phone,
    role: "admin",
    permissions: ["*"],
    passwordHash,
  });
  return staff;
}

async function login({ email, password }) {
  const user = await Staff.findOne({ email }).select("+passwordHash");
  if (!user) throw new ApiError(401, "Invalid credentials");
  const ok = await bcrypt.compare(password, user.passwordHash || "");
  if (!ok) throw new ApiError(401, "Invalid credentials");
  return {
    token: signToken({ sub: String(user._id), role: user.role, name: user.name, email: user.email }),
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
  };
}

module.exports = { registerAdmin, login };
