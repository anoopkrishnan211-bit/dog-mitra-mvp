const mongoose = require("mongoose");
const { buildBaseSchema } = require("./_base");

const TestimonialSchema = buildBaseSchema({
  customerName: { type: String, required: true, trim: true, maxlength: 120 },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", index: true },
  petName: { type: String, trim: true, maxlength: 80 },
  rating: { type: Number, required: true, min: 1, max: 5, index: true },
  quote: { type: String, required: true, trim: true, maxlength: 1500 },
  imageUrl: { type: String, trim: true },
  videoUrl: { type: String, trim: true },
  featured: { type: Boolean, default: false, index: true },
  approved: { type: Boolean, default: false, index: true },
  source: { type: String, enum: ["manual", "google", "whatsapp", "video"], default: "manual" },
});

TestimonialSchema.index({ approved: 1, featured: 1, rating: -1 });

module.exports = mongoose.models.Testimonial || mongoose.model("Testimonial", TestimonialSchema);
