const { ApiError } = require("../../utils/apiError");
const { ContactInformation, SiteSettings } = require("../../../models");
const { DEFAULT_CONTACT, DEFAULT_SITE } = require("./defaults");

const SETTINGS_KEY = "default";

async function seedSettings() {
  const [contactDefault, siteDefault] = await Promise.all([
    ContactInformation.findOne({ settingsKey: SETTINGS_KEY }),
    SiteSettings.findOne({ settingsKey: SETTINGS_KEY }),
  ]);

  if (!contactDefault) {
    const legacyContact = await ContactInformation.findOne({}).sort({ updatedAt: -1 });
    if (legacyContact) {
      await ContactInformation.deleteMany({ settingsKey: { $exists: false }, _id: { $ne: legacyContact._id } });
      legacyContact.settingsKey = SETTINGS_KEY;
      await legacyContact.save();
    } else {
      await ContactInformation.create(DEFAULT_CONTACT);
    }
  }

  if (!siteDefault) {
    const legacySite = await SiteSettings.findOne({}).sort({ updatedAt: -1 });
    if (legacySite) {
      await SiteSettings.deleteMany({ settingsKey: { $exists: false }, _id: { $ne: legacySite._id } });
      legacySite.settingsKey = SETTINGS_KEY;
      await legacySite.save();
    } else {
      await SiteSettings.create(DEFAULT_SITE);
    }
  }
}

async function getPublicSettings() {
  const [contact, site] = await Promise.all([
    ContactInformation.findOne({ settingsKey: SETTINGS_KEY, active: true }).lean(),
    SiteSettings.findOne({ settingsKey: SETTINGS_KEY }).lean(),
  ]);

  return {
    contact,
    site,
  };
}

async function updateSettings(payload) {
  const normalizedContact = { ...(payload.contact || {}), settingsKey: SETTINGS_KEY };
  const normalizedSite = { ...(payload.site || {}), settingsKey: SETTINGS_KEY };

  const [contact, site] = await Promise.all([
    ContactInformation.findOneAndUpdate(
      { settingsKey: SETTINGS_KEY },
      normalizedContact,
      { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true, overwrite: false },
    ),
    SiteSettings.findOneAndUpdate(
      { settingsKey: SETTINGS_KEY },
      normalizedSite,
      { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true, overwrite: false },
    ),
  ]);
  if (!contact || !site) throw new ApiError(500, "Failed to save settings");
  return { contact, site };
}

module.exports = { seedSettings, getPublicSettings, updateSettings };
