const mongoose = require("mongoose");
const { buildBaseSchema } = require("./_base");

const BlogPostSchema = buildBaseSchema({
  title: { type: String, required: true, trim: true, maxlength: 180 },
  slug: { type: String, required: true, trim: true, lowercase: true, unique: true, index: true },
  excerpt: { type: String, required: true, trim: true, maxlength: 400 },
  content: { type: String, required: true, trim: true, maxlength: 50000 },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "Staff", index: true },
  category: { type: String, trim: true, maxlength: 80, index: true },
  tags: [{ type: String, trim: true, index: true }],
  coverImageUrl: { type: String, trim: true },
  videoUrl: { type: String, trim: true },
  seoTitle: { type: String, trim: true, maxlength: 160 },
  seoDescription: { type: String, trim: true, maxlength: 320 },
  publishedAt: { type: Date, index: true },
  status: { type: String, enum: ["draft", "scheduled", "published", "archived"], default: "draft", index: true },
  featured: { type: Boolean, default: false, index: true },
  readTimeMinutes: { type: Number, min: 1, max: 180 },
});

BlogPostSchema.index({ title: "text", excerpt: "text", content: "text", tags: "text", category: "text" });

module.exports = mongoose.models.BlogPost || mongoose.model("BlogPost", BlogPostSchema);
