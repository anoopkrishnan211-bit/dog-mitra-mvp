const mongoose = require("mongoose");
const { buildBaseSchema, lowercaseTrim } = require("./_base");

const StaffSchema = buildBaseSchema({
  name: { type: String, required: true, trim: true, minlength: 2, maxlength: 120 },
  email: { type: String, required: true, trim: true, lowercase: true, unique: true, index: true },
  phone: { type: String, required: true, trim: true, unique: true, index: true },
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
}, { collation: { locale: "en", strength: 2 } });

StaffSchema.index({ role: 1, active: 1 });
StaffSchema.index({ name: "text", email: "text", phone: "text", department: "text", specialization: "text" });
StaffSchema.path("email").set(lowercaseTrim);

module.exports = mongoose.models.Staff || mongoose.model("Staff", StaffSchema);
