const mongoose = require("mongoose");
const { buildBaseSchema } = require("./_base");

const EventSchema = buildBaseSchema({
  title: { type: String, required: true, trim: true, maxlength: 180 },
  slug: { type: String, required: true, trim: true, lowercase: true, unique: true, index: true },
  summary: { type: String, required: true, trim: true, maxlength: 400 },
  description: { type: String, trim: true, maxlength: 5000 },
  coverImageUrl: { type: String, trim: true },
  eventDate: { type: Date, required: true, index: true },
  startTime: { type: String, trim: true, maxlength: 20 },
  endTime: { type: String, trim: true, maxlength: 20 },
  location: { type: String, trim: true, maxlength: 300 },
  capacity: { type: Number, min: 1 },
  registeredCount: { type: Number, min: 0, default: 0 },
  registrationEnabled: { type: Boolean, default: true, index: true },
  featured: { type: Boolean, default: false, index: true },
  status: { type: String, enum: ["draft", "published", "archived"], default: "draft", index: true },
  tags: [{ type: String, trim: true, index: true }],
});

EventSchema.index({ title: "text", summary: "text", description: "text", location: "text", tags: "text" });

module.exports = mongoose.models.Event || mongoose.model("Event", EventSchema);
