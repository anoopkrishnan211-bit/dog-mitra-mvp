const { ApiError } = require("../../utils/apiError");
const { ContactInformation, SiteSettings } = require("../../../models");
const { DEFAULT_CONTACT, DEFAULT_SITE } = require("./defaults");

const SETTINGS_KEY = "default";

async function seedSettings() {
  const [contactDefault, siteDefault] = await Promise.all([
    ContactInformation.findOne({ settingsKey: SETTINGS_KEY }),
    SiteSettings.findOne({ settingsKey: SETTINGS_KEY }),
  ]);

  await Promise.all([
    ContactInformation.updateMany(
      { settingsKey: { $exists: false } },
      { $set: { settingsKey: SETTINGS_KEY } },
      { runValidators: false },
    ),
    SiteSettings.updateMany(
      { settingsKey: { $exists: false } },
      { $set: { settingsKey: SETTINGS_KEY } },
      { runValidators: false },
    ),
  ]);

  if (!contactDefault) {
    await ContactInformation.findOneAndUpdate(
      { settingsKey: SETTINGS_KEY },
      { $setOnInsert: DEFAULT_CONTACT },
      { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true },
    );
  }

  if (!siteDefault) {
    await SiteSettings.findOneAndUpdate(
      { settingsKey: SETTINGS_KEY },
      { $setOnInsert: DEFAULT_SITE },
      { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true },
    );
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
