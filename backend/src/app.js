const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const pkg = require("../package.json");
const { env } = require("./config/env");
const { apiRouter } = require("./routes");
const { publicRouter } = require("./routes/public.routes");
const { errorHandler } = require("./middlewares/errorHandler");
const { swaggerJsdoc } = require("./openapi");
const mongoose = require("mongoose");

function buildApp() {
  const app = express();
  app.use(helmet());
  app.use(cors({ origin: env.corsOrigin === "*" ? true : env.corsOrigin }));
  app.use(express.json({ limit: "2mb" }));
  app.use(morgan(env.nodeEnv === "production" ? "combined" : "dev"));
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc()));
  app.get("/health", (_req, res) => {
    res.status(200).json({
      status: "healthy",
      service: "Dog Mitra Backend",
      version: pkg.version,
      environment: env.nodeEnv,
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      mongo: {
        connected: mongoose.connection.readyState === 1,
        readyState: mongoose.connection.readyState,
        database: mongoose.connection.name || env.mongoDbName,
      },
      nodeVersion: process.version,
    });
  });
  app.use("/api/public", publicRouter);
  app.use("/api", apiRouter);
  app.use(errorHandler);
  return app;
}

module.exports = { buildApp };
