const express = require("express");
const models = require("../../../models");
const { catchAsync } = require("../utils/catchAsync");

const router = express.Router();

function listPublic(model, filter = {}, options = {}) {
  return catchAsync(async (_req, res) => {
    const items = await model.find(filter).sort(options.sort || "-createdAt").lean();
    res.status(200).json({ items });
  });
}

router.get("/products", listPublic(models.Product, { active: true }, { sort: "-featured -createdAt" }));
router.get("/services", listPublic(models.Service, { active: true }, { sort: "-featured -createdAt" }));
router.get("/blog-posts", listPublic(models.BlogPost, { status: "published" }, { sort: "-featured -publishedAt -createdAt" }));
router.get("/blogs", listPublic(models.BlogPost, { status: "published" }, { sort: "-featured -publishedAt -createdAt" }));
router.get("/faqs", listPublic(models.FAQ, { active: true }, { sort: "sortOrder createdAt" }));
router.get("/testimonials", listPublic(models.Testimonial, { approved: true }, { sort: "-featured -rating -createdAt" }));
router.get("/gallery", listPublic(models.Gallery, { active: true }, { sort: "-featured sortOrder -createdAt" }));
router.get("/events", listPublic(models.Event, { status: "published" }, { sort: "eventDate" }));

module.exports = { publicRouter: router };
