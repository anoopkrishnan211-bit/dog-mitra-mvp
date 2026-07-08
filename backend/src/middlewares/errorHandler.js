const { ZodError } = require("zod");

function errorHandler(err, _req, res, _next) {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: "Validation failed", details: err.flatten() });
  }
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    message: err.message || "Internal Server Error",
    details: err.details || undefined,
  });
}

module.exports = { errorHandler };
