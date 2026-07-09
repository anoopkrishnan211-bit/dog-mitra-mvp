const mongoose = require("mongoose");
const { buildBaseSchema } = require("./_base");

const AuthSessionSchema = buildBaseSchema({
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: "Staff", required: true, index: true },
  refreshTokenHash: { type: String, required: true, select: false, index: true },
  expiresAt: { type: Date, required: true },
  revokedAt: { type: Date },
  revokedReason: { type: String, trim: true, maxlength: 255 },
  ip: { type: String, trim: true },
  userAgent: { type: String, trim: true },
  deviceName: { type: String, trim: true, maxlength: 120 },
  rememberMe: { type: Boolean, default: false, index: true },
});

AuthSessionSchema.index({ staffId: 1, expiresAt: -1 });
AuthSessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.models.AuthSession || mongoose.model("AuthSession", AuthSessionSchema);
