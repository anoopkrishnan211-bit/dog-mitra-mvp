const mongoose = require("mongoose");
const { buildBaseSchema } = require("./_base");

const PasswordResetTokenSchema = buildBaseSchema({
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: "Staff", required: true, index: true },
  tokenHash: { type: String, required: true, select: false, index: true },
  expiresAt: { type: Date, required: true, index: true },
  usedAt: { type: Date },
  requestedIp: { type: String, trim: true },
  requestedUserAgent: { type: String, trim: true },
});

PasswordResetTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.models.PasswordResetToken || mongoose.model("PasswordResetToken", PasswordResetTokenSchema);
