const express = require("express");
const { authenticate, authorize } = require("../middlewares/auth");
const { settingsController } = require("../modules/settings/settings.controller");

const router = express.Router();

router.get("/", settingsController.public);
router.put("/", authenticate, authorize("admin"), settingsController.update);

module.exports = { settingsRouter: router };
