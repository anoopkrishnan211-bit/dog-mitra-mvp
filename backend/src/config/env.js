const path = require("path");
const dotenv = require("dotenv");

const envFiles = [
  path.resolve(process.cwd(), ".env"),
  path.resolve(process.cwd(), "backend", ".env"),
  path.resolve(__dirname, "..", "..", ".env"),
  path.resolve(__dirname, "..", "..", "backend", ".env"),
];

for (const file of envFiles) {
  dotenv.config({ path: file, override: false });
}

function requireEnv(name) {
  const value = process.env[name];
  if (!value || !value.trim()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value.trim();
}

const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 4000),
  jwtSecret: process.env.JWT_SECRET || "dev-only-change-me",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  corsOrigin: process.env.CORS_ORIGIN || "*",
  mongoUri: requireEnv("MONGODB_URI"),
  mongoDbName: requireEnv("MONGODB_DB_NAME"),
  initialSuperAdmin: {
    name: process.env.SUPER_ADMIN_NAME?.trim(),
    username: process.env.SUPER_ADMIN_USERNAME?.trim(),
    email: process.env.SUPER_ADMIN_EMAIL?.trim(),
    phone: process.env.SUPER_ADMIN_MOBILE?.trim(),
    password: process.env.SUPER_ADMIN_PASSWORD?.trim(),
  },
};

module.exports = { env };
