const mongoose = require("mongoose");
const { buildBaseSchema } = require("./_base");

const FAQSchema = buildBaseSchema({
  question: { type: String, required: true, trim: true, maxlength: 300 },
  answer: { type: String, required: true, trim: true, maxlength: 5000 },
  category: { type: String, trim: true, maxlength: 80, index: true },
  sortOrder: { type: Number, default: 0, index: true },
  active: { type: Boolean, default: true, index: true },
  relatedServiceIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }],
});

FAQSchema.index({ question: "text", answer: "text", category: "text" });

module.exports = mongoose.models.FAQ || mongoose.model("FAQ", FAQSchema);
