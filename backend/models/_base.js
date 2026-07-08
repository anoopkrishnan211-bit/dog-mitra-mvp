const mongoose = require("mongoose");

function buildBaseSchema(definition, options = {}) {
  return new mongoose.Schema(definition, {
    timestamps: true,
    versionKey: false,
    ...options,
  });
}

function lowercaseTrim(v) {
  if (typeof v !== "string") return v;
  return v.trim().toLowerCase();
}

function trimString(v) {
  if (typeof v !== "string") return v;
  return v.trim();
}

module.exports = {
  buildBaseSchema,
  lowercaseTrim,
  trimString,
};
