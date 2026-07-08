const { buildApp } = require("./app");
const { env } = require("./config/env");
const { connectMongo, registerShutdownHooks } = require("../config/mongoose");

async function main() {
  await connectMongo();
  const app = buildApp();
  const server = app.listen(env.port, () => {
    console.log(`[Dog Mitra] API listening on port ${env.port}`);
  });
  registerShutdownHooks(server);
}

main().catch((error) => {
  console.error("[Dog Mitra] Failed to start server:", error);
  process.exit(1);
});
