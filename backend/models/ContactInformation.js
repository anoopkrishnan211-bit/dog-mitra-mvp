const mongoose = require("mongoose");
const { buildBaseSchema } = require("./_base");

const ContactInformationSchema = buildBaseSchema({
  settingsKey: { type: String, required: true, unique: true, index: true, immutable: true, default: "default" },
  clinicName: { type: String, required: true, trim: true, maxlength: 160, default: "Dog Mitra" },
  phone: { type: String, required: true, trim: true, index: true },
  whatsapp: { type: String, trim: true, index: true },
  email: { type: String, trim: true, lowercase: true, index: true },
  address: {
    line1: { type: String, required: true, trim: true, maxlength: 200 },
    line2: { type: String, trim: true, maxlength: 200 },
    city: { type: String, required: true, trim: true, maxlength: 80, index: true },
    state: { type: String, required: true, trim: true, maxlength: 80 },
    pincode: { type: String, required: true, trim: true, maxlength: 12 },
    country: { type: String, default: "IN", trim: true },
  },
  googleMapsLink: { type: String, required: true, trim: true },
  latitude: { type: Number, min: -90, max: 90 },
  longitude: { type: Number, min: -180, max: 180 },
  clinicHours: [{ day: { type: String, required: true, trim: true }, open: { type: String, trim: true }, close: { type: String, trim: true }, closed: { type: Boolean, default: false } }],
  emergencyHours: { type: String, trim: true, maxlength: 255, default: "Available 24 Hours, 7 Days a Week" },
  emergencyPhone: { type: String, trim: true, index: true },
  parkingInfo: { type: String, trim: true, maxlength: 500 },
  socialLinks: [{ label: { type: String, trim: true }, url: { type: String, trim: true } }],
  active: { type: Boolean, default: true, index: true },
});

ContactInformationSchema.index({ clinicName: "text", "address.city": "text", phone: "text", whatsapp: "text" });

module.exports = mongoose.models.ContactInformation || mongoose.model("ContactInformation", ContactInformationSchema);
