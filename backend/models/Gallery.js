const mongoose = require("mongoose");
const { buildBaseSchema } = require("./_base");

const GallerySchema = buildBaseSchema({
  title: { type: String, required: true, trim: true, maxlength: 160 },
  slug: { type: String, trim: true, lowercase: true, unique: true, sparse: true, index: true },
  category: {
    type: String,
    required: true,
    enum: ["clinic", "pets", "events", "customers", "treatments", "facilities", "general"],
    index: true,
  },
  description: { type: String, trim: true, maxlength: 1000 },
  mediaType: { type: String, enum: ["image", "video"], default: "image", index: true },
  mediaUrl: { type: String, required: true, trim: true },
  thumbnailUrl: { type: String, trim: true },
  altText: { type: String, required: true, trim: true, maxlength: 200 },
  featured: { type: Boolean, default: false, index: true },
  sortOrder: { type: Number, default: 0, index: true },
  tags: [{ type: String, trim: true, index: true }],
  takenAt: { type: Date, index: true },
  locationLabel: { type: String, trim: true, maxlength: 120 },
  active: { type: Boolean, default: true, index: true },
});

GallerySchema.index({ title: "text", description: "text", tags: "text", locationLabel: "text" });

module.exports = mongoose.models.Gallery || mongoose.model("Gallery", GallerySchema);
