const mongoose = require("mongoose");
const { buildBaseSchema, lowercaseTrim } = require("./_base");

const StaffSchema = buildBaseSchema({
  name: { type: String, required: true, trim: true, minlength: 2, maxlength: 120 },
  username: { type: String, required: true, trim: true, lowercase: true, unique: true, index: true, minlength: 3, maxlength: 40 },
  email: { type: String, required: true, trim: true, lowercase: true, unique: true, index: true },
  phone: { type: String, required: true, trim: true, unique: true, index: true },
  passwordHash: { type: String, trim: true, select: false },
  passwordChangedAt: { type: Date },
  resetPasswordTokenHash: { type: String, select: false },
  resetPasswordExpiresAt: { type: Date },
  failedLoginAttempts: { type: Number, default: 0, min: 0 },
  lockUntil: { type: Date },
  role: {
    type: String,
    required: true,
    enum: ["admin", "doctor", "receptionist", "inventory", "content", "support"],
    default: "support",
    index: true,
  },
  department: { type: String, trim: true, maxlength: 80 },
  specialization: { type: String, trim: true, maxlength: 120 },
  languages: [{ type: String, trim: true }],
  bio: { type: String, trim: true, maxlength: 1000 },
  photoUrl: { type: String, trim: true },
  active: { type: Boolean, default: true, index: true },
  permissions: [{ type: String, trim: true }],
  lastLoginAt: { type: Date },
  lastLogoutAt: { type: Date },
  loginHistory: [{
    at: { type: Date, default: Date.now },
    ip: { type: String, trim: true },
    userAgent: { type: String, trim: true },
    action: { type: String, enum: ["login", "logout", "failed_login", "password_reset"], required: true },
    success: { type: Boolean, default: true },
  }],
}, { collation: { locale: "en", strength: 2 } });

StaffSchema.index({ role: 1, active: 1 });
StaffSchema.index({ name: "text", email: "text", phone: "text", department: "text", specialization: "text" });
StaffSchema.path("email").set(lowercaseTrim);
StaffSchema.path("username").set(lowercaseTrim);

module.exports = mongoose.models.Staff || mongoose.model("Staff", StaffSchema);
