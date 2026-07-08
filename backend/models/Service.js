const mongoose = require("mongoose");
const { buildBaseSchema } = require("./_base");

const ServiceSchema = buildBaseSchema({
  title: { type: String, required: true, trim: true, maxlength: 160 },
  slug: { type: String, required: true, trim: true, lowercase: true, unique: true, index: true },
  summary: { type: String, required: true, trim: true, maxlength: 300 },
  description: { type: String, required: true, trim: true, maxlength: 5000 },
  benefits: [{ type: String, trim: true }],
  suitableFor: [{ type: String, trim: true }],
  procedure: { type: String, trim: true, maxlength: 3000 },
  durationMinutes: { type: Number, min: 5, max: 1440 },
  price: { type: Number, min: 0 },
  currency: { type: String, default: "INR", uppercase: true },
  featured: { type: Boolean, default: false, index: true },
  active: { type: Boolean, default: true, index: true },
  imageUrl: { type: String, trim: true },
  faqIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "FAQ" }],
  relatedServiceIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }],
});

ServiceSchema.index({ title: "text", summary: "text", description: "text", benefits: "text", suitableFor: "text" });

module.exports = mongoose.models.Service || mongoose.model("Service", ServiceSchema);
