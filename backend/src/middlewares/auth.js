const jwt = require("jsonwebtoken");
const { ApiError } = require("../utils/apiError");
const { env } = require("../config/env");

const ROLE_PERMISSIONS = {
  admin: ["*"],
  doctor: ["read:any", "write:appointments", "write:crm"],
  receptionist: ["read:any", "write:appointments", "write:customers"],
  inventory: ["read:any", "write:products", "write:inventory", "write:orders"],
  content: ["read:any", "write:content"],
  support: ["read:any"],
  customer: ["read:self", "write:self"],
};

function signToken(payload) {
  return jwt.sign(payload, env.jwtSecret, { expiresIn: env.jwtExpiresIn });
}

function authenticate(req, _res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return next(new ApiError(401, "Authentication required"));
  try {
    req.user = jwt.verify(token, env.jwtSecret);
    return next();
  } catch {
    return next(new ApiError(401, "Invalid or expired token"));
  }
}

function authorize(...roles) {
  return (req, _res, next) => {
    if (!req.user) return next(new ApiError(401, "Authentication required"));
    if (!roles.length) return next();
    const allowed = roles.includes(req.user.role) || req.user.role === "admin";
    return allowed ? next() : next(new ApiError(403, "Forbidden"));
  };
}

module.exports = { ROLE_PERMISSIONS, signToken, authenticate, authorize };
