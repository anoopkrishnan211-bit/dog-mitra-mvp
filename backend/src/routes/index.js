const express = require("express");
const mongoose = require("mongoose");
const { authController } = require("../modules/auth/auth.controller");
const { authenticate, authorize } = require("../middlewares/auth");
const { createResourceModule } = require("../modules/resourceFactory");
const { settingsRouter } = require("./settings.routes");
const models = require("../../models");

const router = express.Router();

router.post("/auth/login", authController.login);
router.post("/auth/register-admin", authController.registerAdmin);
router.post("/auth/logout", authController.logout);
router.post("/auth/refresh", authController.refresh);
router.post("/auth/forgot-password", authController.forgotPassword);
router.post("/auth/reset-password", authController.resetPassword);
router.post("/auth/change-password", authenticate, authController.changePassword);
router.get("/auth/sessions", authenticate, authController.sessions);
router.delete("/auth/sessions/:id", authenticate, authController.revokeSession);

const publicReadRoles = ["admin", "doctor", "receptionist", "inventory", "content", "support"];

router.use("/staff", createResourceModule(models.Staff, ["admin"]).router);
router.use("/customers", createResourceModule(models.Customer, ["admin", "doctor", "receptionist"]).router);
router.use("/pets", createResourceModule(models.Pet, ["admin", "doctor", "receptionist"]).router);
router.use("/appointments", createResourceModule(models.Appointment, ["admin", "doctor", "receptionist"]).router);
router.use("/products", createResourceModule(models.Product, ["admin", "inventory", "content"]).router);
router.use("/categories", createResourceModule(models.Category, ["admin", "inventory", "content"]).router);
router.use("/inventory", createResourceModule(models.Inventory, ["admin", "inventory"]).router);
router.use("/orders", createResourceModule(models.Order, ["admin", "inventory", "receptionist"]).router);
router.use("/testimonials", createResourceModule(models.Testimonial, ["admin", "content"]).router);
router.use("/gallery", createResourceModule(models.Gallery, ["admin", "content"]).router);
router.use("/services", createResourceModule(models.Service, ["admin", "content"]).router);
router.use("/blog-posts", createResourceModule(models.BlogPost, ["admin", "content"]).router);
router.use("/events", createResourceModule(models.Event, ["admin", "content"]).router);
router.use("/faqs", createResourceModule(models.FAQ, ["admin", "content"]).router);
router.use("/contact-information", createResourceModule(models.ContactInformation, ["admin", "content"]).router);
router.use("/site-settings", createResourceModule(models.SiteSettings, ["admin"]).router);
router.use("/settings", settingsRouter);

router.get("/health", (_req, res) => res.status(200).json({ status: "ok" }));
router.get("/health/db", async (_req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ status: "down", connected: false, readyState: mongoose.connection.readyState });
    }
    const collections = await mongoose.connection.db.listCollections().toArray();
    const counts = {};
    for (const collection of collections) {
      counts[collection.name] = await mongoose.connection.db.collection(collection.name).countDocuments();
    }
    return res.status(200).json({
      status: "up",
      connected: true,
      database: mongoose.connection.name,
      readyState: mongoose.connection.readyState,
      collections: collections.map((item) => item.name),
      counts,
    });
  } catch (error) {
    return next(error);
  }
});
router.get("/me", authenticate, authorize(...publicReadRoles), (req, res) => res.json({ user: req.user }));

module.exports = { apiRouter: router };
