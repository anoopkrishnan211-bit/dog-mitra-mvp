const mongoose = require("mongoose");
const { buildBaseSchema } = require("./_base");

const CategorySchema = buildBaseSchema({
  name: { type: String, required: true, trim: true, unique: true, index: true, maxlength: 120 },
  slug: { type: String, required: true, trim: true, unique: true, index: true, lowercase: true },
  description: { type: String, trim: true, maxlength: 500 },
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", index: true },
  sortOrder: { type: Number, default: 0, index: true },
  active: { type: Boolean, default: true, index: true },
  imageUrl: { type: String, trim: true },
});

CategorySchema.index({ name: "text", slug: "text", description: "text" });

module.exports = mongoose.models.Category || mongoose.model("Category", CategorySchema);
