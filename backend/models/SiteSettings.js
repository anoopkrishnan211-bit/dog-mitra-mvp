const mongoose = require("mongoose");
const { buildBaseSchema } = require("./_base");

const SiteSettingsSchema = buildBaseSchema({
  siteName: { type: String, required: true, trim: true, default: "Dog Mitra", maxlength: 160 },
  logoUrl: { type: String, trim: true },
  faviconUrl: { type: String, trim: true },
  primaryColor: { type: String, trim: true, default: "#1f6b4f" },
  secondaryColor: { type: String, trim: true, default: "#ffffff" },
  accentColor: { type: String, trim: true, default: "#f0b44c" },
  homepageHeroTitle: { type: String, trim: true, maxlength: 180 },
  homepageHeroSubtitle: { type: String, trim: true, maxlength: 400 },
  doctor: {
    name: { type: String, trim: true, maxlength: 160, default: "Dr. Sanjeev Kumre" },
    bio: { type: String, trim: true, maxlength: 1000 },
    specialization: { type: String, trim: true, maxlength: 240 },
    languages: { type: String, trim: true, maxlength: 120 },
    timings: { type: String, trim: true, maxlength: 200 },
  },
  bookAppointmentCta: { type: String, trim: true, maxlength: 80, default: "Book Appointment" },
  exploreShopCta: { type: String, trim: true, maxlength: 80, default: "Explore Shop" },
  footerNote: { type: String, trim: true, maxlength: 500 },
  maintenanceMode: { type: Boolean, default: false, index: true },
  enabledLanguages: [{ type: String, trim: true, default: "en" }],
  languageDefault: { type: String, trim: true, default: "en" },
  businessHours: {
    display: { type: String, trim: true, default: "Monday - Saturday" },
    open: { type: String, trim: true, default: "09:00 AM" },
    close: { type: String, trim: true, default: "06:00 PM" },
    emergencyLabel: { type: String, trim: true, default: "Emergency Veterinary Assistance" },
    emergencyHours: { type: String, trim: true, default: "Available 24 Hours, 7 Days a Week" },
  },
  contact: {
    phone: { type: String, trim: true },
    whatsapp: { type: String, trim: true },
    email: { type: String, trim: true },
  },
  branding: {
    logoUrl: { type: String, trim: true },
    faviconUrl: { type: String, trim: true },
  },
  socialLinks: {
    instagram: { type: String, trim: true },
    facebook: { type: String, trim: true },
    youtube: { type: String, trim: true },
    linkedin: { type: String, trim: true },
    googleBusiness: { type: String, trim: true },
  },
  payment: {
    method: { type: String, trim: true, default: "UPI" },
    upiId: { type: String, trim: true },
    qrCodeUrl: { type: String, trim: true },
    paymentScreenshotUrl: { type: String, trim: true },
    approvalRequired: { type: Boolean, default: true },
    razorpayEnabled: { type: Boolean, default: false },
  },
  smtp: {
    host: { type: String, trim: true },
    port: { type: Number, min: 1, max: 65535 },
    username: { type: String, trim: true },
    password: { type: String, trim: true, select: false },
    senderName: { type: String, trim: true },
    senderEmail: { type: String, trim: true },
  },
  analytics: {
    ga4: { type: String, trim: true },
    gtm: { type: String, trim: true },
    metaPixel: { type: String, trim: true },
    clarity: { type: String, trim: true },
  },
  seo: {
    title: { type: String, trim: true, maxlength: 160 },
    description: { type: String, trim: true, maxlength: 320 },
    keywords: [{ type: String, trim: true }],
    canonicalUrl: { type: String, trim: true },
  },
  contactInformationId: { type: mongoose.Schema.Types.ObjectId, ref: "ContactInformation" },
  emergencyContact: { type: String, trim: true },
});

SiteSettingsSchema.index({ siteName: "text", homepageHeroTitle: "text", footerNote: "text" });

module.exports = mongoose.models.SiteSettings || mongoose.model("SiteSettings", SiteSettingsSchema);
