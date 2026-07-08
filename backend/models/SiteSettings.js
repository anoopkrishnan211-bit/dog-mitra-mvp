const mongoose = require("mongoose");
const { buildBaseSchema } = require("./_base");

const SiteSettingsSchema = buildBaseSchema({
  siteName: { type: String, required: true, trim: true, default: "Dog Mitra", maxlength: 160 },
  logoUrl: { type: String, trim: true },
  primaryColor: { type: String, trim: true, default: "#1f6b4f" },
  secondaryColor: { type: String, trim: true, default: "#fffdf8" },
  homepageHeroTitle: { type: String, trim: true, maxlength: 180 },
  homepageHeroSubtitle: { type: String, trim: true, maxlength: 400 },
  bookAppointmentCta: { type: String, trim: true, maxlength: 80 },
  exploreShopCta: { type: String, trim: true, maxlength: 80 },
  footerNote: { type: String, trim: true, maxlength: 500 },
  maintenanceMode: { type: Boolean, default: false, index: true },
  enabledLanguages: [{ type: String, trim: true, default: "en" }],
  seo: {
    title: { type: String, trim: true, maxlength: 160 },
    description: { type: String, trim: true, maxlength: 320 },
    keywords: [{ type: String, trim: true }],
    canonicalUrl: { type: String, trim: true },
  },
  contactInformationId: { type: mongoose.Schema.Types.ObjectId, ref: "ContactInformation" },
});

SiteSettingsSchema.index({ siteName: "text", homepageHeroTitle: "text", footerNote: "text" });

module.exports = mongoose.models.SiteSettings || mongoose.model("SiteSettings", SiteSettingsSchema);
