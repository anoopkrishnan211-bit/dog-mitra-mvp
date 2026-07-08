const mongoose = require("mongoose");
const { buildBaseSchema } = require("./_base");

const AppointmentSchema = buildBaseSchema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true, index: true },
  petId: { type: mongoose.Schema.Types.ObjectId, ref: "Pet", required: true, index: true },
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: "Staff", index: true },
  type: {
    type: String,
    required: true,
    enum: ["clinic_visit", "home_visit", "vaccination", "emergency_consultation"],
    index: true,
  },
  status: {
    type: String,
    enum: ["requested", "confirmed", "rescheduled", "completed", "cancelled", "no_show"],
    default: "requested",
    index: true,
  },
  scheduledAt: { type: Date, required: true, index: true },
  durationMinutes: { type: Number, min: 5, max: 480, default: 30 },
  reason: { type: String, required: true, trim: true, maxlength: 1000 },
  notes: { type: String, trim: true, maxlength: 2000 },
  channel: { type: String, enum: ["website", "phone", "whatsapp", "walk_in"], default: "website" },
  homeVisitAddress: { type: String, trim: true, maxlength: 500 },
  reminderSent: { type: Boolean, default: false, index: true },
  cancelledAt: { type: Date },
  cancellationReason: { type: String, trim: true, maxlength: 500 },
});

AppointmentSchema.index({ scheduledAt: 1, status: 1 });
AppointmentSchema.index({ customerId: 1, createdAt: -1 });
AppointmentSchema.index({ petId: 1, scheduledAt: -1 });

module.exports = mongoose.models.Appointment || mongoose.model("Appointment", AppointmentSchema);
