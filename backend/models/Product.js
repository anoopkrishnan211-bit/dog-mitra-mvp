const mongoose = require("mongoose");
const { buildBaseSchema, lowercaseTrim } = require("./_base");

const VariantSchema = new mongoose.Schema({
  sku: { type: String, required: true, trim: true, uppercase: true },
  label: { type: String, required: true, trim: true, maxlength: 120 },
  price: { type: Number, required: true, min: 0 },
  salePrice: { type: Number, min: 0 },
  stock: { type: Number, default: 0, min: 0 },
}, { _id: false });

const ProductSchema = buildBaseSchema({
  name: { type: String, required: true, trim: true, maxlength: 160 },
  slug: { type: String, required: true, trim: true, lowercase: true, unique: true, index: true },
  sku: { type: String, required: true, trim: true, uppercase: true, unique: true, index: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true, index: true },
  brand: { type: String, trim: true, maxlength: 120, index: true },
  description: { type: String, required: true, trim: true, maxlength: 5000 },
  shortDescription: { type: String, trim: true, maxlength: 300 },
  price: { type: Number, required: true, min: 0, index: true },
  salePrice: { type: Number, min: 0 },
  currency: { type: String, default: "INR", trim: true, uppercase: true },
  images: [{ type: String, trim: true }],
  videoUrl: { type: String, trim: true },
  specifications: [{ label: { type: String, required: true, trim: true }, value: { type: String, required: true, trim: true } }],
  benefits: [{ type: String, trim: true }],
  usageInstructions: { type: String, trim: true, maxlength: 2000 },
  featured: { type: Boolean, default: false, index: true },
  active: { type: Boolean, default: true, index: true },
  ratingsAverage: { type: Number, min: 0, max: 5, default: 0, index: true },
  ratingsCount: { type: Number, min: 0, default: 0 },
  variants: [VariantSchema],
  tags: [{ type: String, trim: true, index: true }],
  metaTitle: { type: String, trim: true, maxlength: 160 },
  metaDescription: { type: String, trim: true, maxlength: 320 },
}, { collation: { locale: "en", strength: 2 } });

ProductSchema.index({ name: "text", description: "text", brand: "text", tags: "text" });
ProductSchema.path("slug").set(lowercaseTrim);

module.exports = mongoose.models.Product || mongoose.model("Product", ProductSchema);
