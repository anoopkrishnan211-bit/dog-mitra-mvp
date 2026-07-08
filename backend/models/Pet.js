const mongoose = require("mongoose");
const { buildBaseSchema, lowercaseTrim } = require("./_base");

const PetSchema = buildBaseSchema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true, index: true },
  name: { type: String, required: true, trim: true, minlength: 1, maxlength: 80 },
  species: { type: String, required: true, trim: true, default: "dog", enum: ["dog", "cat", "bird", "other"], index: true },
  breed: { type: String, required: true, trim: true, maxlength: 120, index: true },
  age: { type: Number, min: 0, max: 40 },
  gender: { type: String, enum: ["male", "female", "unknown"], default: "unknown", index: true },
  weightKg: { type: Number, min: 0, max: 200 },
  color: { type: String, trim: true, maxlength: 80 },
  photoUrl: { type: String, trim: true },
  allergies: [{ type: String, trim: true }],
  foodPreferences: [{ type: String, trim: true }],
  medicalHistory: { type: String, trim: true, maxlength: 2000 },
  vaccinationRecords: [
    {
      vaccineName: { type: String, required: true, trim: true, maxlength: 120 },
      dueDate: { type: Date },
      administeredOn: { type: Date },
      notes: { type: String, trim: true, maxlength: 500 },
    },
  ],
  microchipNumber: { type: String, trim: true, unique: true, sparse: true, index: true },
  active: { type: Boolean, default: true, index: true },
}, { collation: { locale: "en", strength: 2 } });

PetSchema.index({ name: "text", breed: "text", species: "text", allergies: "text", foodPreferences: "text" });
PetSchema.path("breed").set(lowercaseTrim);
PetSchema.path("species").set(lowercaseTrim);

module.exports = mongoose.models.Pet || mongoose.model("Pet", PetSchema);
