const { ApiError } = require("../../utils/apiError");
const { ContactInformation, SiteSettings } = require("../../../models");
const { DEFAULT_CONTACT, DEFAULT_SITE } = require("./defaults");

async function seedSettings() {
  const [contactCount, siteCount] = await Promise.all([
    ContactInformation.countDocuments({}),
    SiteSettings.countDocuments({}),
  ]);

  if (!contactCount) {
    await ContactInformation.create(DEFAULT_CONTACT);
  }
  if (!siteCount) {
    await SiteSettings.create(DEFAULT_SITE);
  }
}

async function getPublicSettings() {
  const [contact, site] = await Promise.all([
    ContactInformation.findOne({ active: true }).lean(),
    SiteSettings.findOne({}).lean(),
  ]);

  return {
    contact,
    site,
  };
}

async function updateSettings(payload) {
  const [contact, site] = await Promise.all([
    ContactInformation.findOneAndUpdate({}, payload.contact || {}, { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }),
    SiteSettings.findOneAndUpdate({}, payload.site || {}, { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }),
  ]);
  if (!contact || !site) throw new ApiError(500, "Failed to save settings");
  return { contact, site };
}

module.exports = { seedSettings, getPublicSettings, updateSettings };
