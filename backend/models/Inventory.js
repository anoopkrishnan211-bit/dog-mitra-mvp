const mongoose = require("mongoose");
const { buildBaseSchema } = require("./_base");

const InventorySchema = buildBaseSchema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true, unique: true, index: true },
  sku: { type: String, required: true, trim: true, uppercase: true, unique: true, index: true },
  warehouseLocation: { type: String, trim: true, maxlength: 120 },
  stockOnHand: { type: Number, required: true, min: 0, default: 0, index: true },
  reservedStock: { type: Number, required: true, min: 0, default: 0 },
  reorderLevel: { type: Number, required: true, min: 0, default: 0, index: true },
  reorderQuantity: { type: Number, min: 0, default: 0 },
  costPrice: { type: Number, min: 0 },
  expiryDate: { type: Date, index: true },
  batchNumber: { type: String, trim: true, maxlength: 80 },
  supplierName: { type: String, trim: true, maxlength: 120 },
  lowStock: { type: Boolean, default: false, index: true },
  lastUpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Staff", index: true },
});

InventorySchema.index({ sku: 1, stockOnHand: 1, lowStock: 1 });

module.exports = mongoose.models.Inventory || mongoose.model("Inventory", InventorySchema);
