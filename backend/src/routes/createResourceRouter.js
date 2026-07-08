const express = require("express");
const { authenticate, authorize } = require("../middlewares/auth");

function createResourceRouter(controller, roles = ["admin"]) {
  const router = express.Router();

  router.get("/", authenticate, authorize(...roles), controller.list);
  router.get("/:id", authenticate, authorize(...roles), controller.getById);
  router.post("/", authenticate, authorize(...roles), controller.create);
  router.patch("/:id", authenticate, authorize(...roles), controller.update);
  router.delete("/:id", authenticate, authorize(...roles), controller.remove);

  return router;
}

module.exports = { createResourceRouter };
