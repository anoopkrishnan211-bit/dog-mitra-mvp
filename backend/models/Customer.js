const mongoose = require("mongoose");
const { buildBaseSchema, lowercaseTrim } = require("./_base");

const CustomerSchema = buildBaseSchema({
  name: { type: String, required: true, trim: true, minlength: 2, maxlength: 120 },
  email: { type: String, trim: true, lowercase: true, index: true },
  phone: { type: String, required: true, trim: true, unique: true, index: true },
  alternatePhone: { type: String, trim: true },
  address: {
    line1: { type: String, trim: true, maxlength: 200 },
    line2: { type: String, trim: true, maxlength: 200 },
    city: { type: String, trim: true, maxlength: 80 },
    state: { type: String, trim: true, maxlength: 80 },
    pincode: { type: String, trim: true, maxlength: 12 },
  },
  status: {
    type: String,
    enum: ["active", "inactive", "vip", "blocked"],
    default: "active",
    index: true,
  },
  loyaltyLevel: { type: String, trim: true, default: "standard", index: true },
  tags: [{ type: String, trim: true, index: true }],
  notes: { type: String, trim: true, maxlength: 1500 },
}, { collation: { locale: "en", strength: 2 } });

CustomerSchema.index({ name: "text", email: "text", phone: "text", "address.city": "text", tags: "text" });
CustomerSchema.path("email").set(lowercaseTrim);

module.exports = mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);
