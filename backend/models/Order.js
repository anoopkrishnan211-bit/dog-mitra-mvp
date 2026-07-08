const mongoose = require("mongoose");
const { buildBaseSchema } = require("./_base");

const OrderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  name: { type: String, required: true, trim: true, maxlength: 160 },
  sku: { type: String, required: true, trim: true, uppercase: true },
  quantity: { type: Number, required: true, min: 1 },
  unitPrice: { type: Number, required: true, min: 0 },
  variantLabel: { type: String, trim: true, maxlength: 120 },
}, { _id: false });

const OrderSchema = buildBaseSchema({
  orderNumber: { type: String, required: true, trim: true, unique: true, index: true, uppercase: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true, index: true },
  items: { type: [OrderItemSchema], validate: [arr => arr.length > 0, "At least one order item is required"] },
  subtotal: { type: Number, required: true, min: 0 },
  discountAmount: { type: Number, min: 0, default: 0 },
  taxAmount: { type: Number, min: 0, default: 0 },
  shippingAmount: { type: Number, min: 0, default: 0 },
  totalAmount: { type: Number, required: true, min: 0, index: true },
  currency: { type: String, default: "INR", uppercase: true },
  status: {
    type: String,
    enum: ["pending", "paid", "packed", "shipped", "delivered", "cancelled", "refunded"],
    default: "pending",
    index: true,
  },
  paymentMethod: { type: String, enum: ["upi", "cash", "card", "gateway"], default: "upi" },
  paymentStatus: { type: String, enum: ["pending", "authorized", "captured", "failed", "refunded"], default: "pending", index: true },
  paymentReference: { type: String, trim: true, index: true },
  billingAddress: {
    line1: { type: String, trim: true, maxlength: 200 },
    line2: { type: String, trim: true, maxlength: 200 },
    city: { type: String, trim: true, maxlength: 80 },
    state: { type: String, trim: true, maxlength: 80 },
    pincode: { type: String, trim: true, maxlength: 12 },
  },
  shippingAddress: {
    line1: { type: String, trim: true, maxlength: 200 },
    line2: { type: String, trim: true, maxlength: 200 },
    city: { type: String, trim: true, maxlength: 80 },
    state: { type: String, trim: true, maxlength: 80 },
    pincode: { type: String, trim: true, maxlength: 12 },
  },
  notes: { type: String, trim: true, maxlength: 2000 },
}, { collation: { locale: "en", strength: 2 } });

OrderSchema.index({ customerId: 1, createdAt: -1 });
OrderSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.models.Order || mongoose.model("Order", OrderSchema);
