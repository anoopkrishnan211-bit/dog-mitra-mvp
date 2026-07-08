const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const { env } = require("./config/env");
const { apiRouter } = require("./routes");
const { errorHandler } = require("./middlewares/errorHandler");
const { swaggerJsdoc } = require("./openapi");

function buildApp() {
  const app = express();
  app.use(helmet());
  app.use(cors({ origin: env.corsOrigin === "*" ? true : env.corsOrigin }));
  app.use(express.json({ limit: "2mb" }));
  app.use(morgan(env.nodeEnv === "production" ? "combined" : "dev"));
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc()));
  app.use("/api", apiRouter);
  app.use(errorHandler);
  return app;
}

module.exports = { buildApp };
