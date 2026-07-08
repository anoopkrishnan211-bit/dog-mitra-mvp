const { buildApp } = require("./app");
const { env } = require("./config/env");
const { connectMongo, registerShutdownHooks } = require("../config/mongoose");
const { ensureAdminSeed } = require("./modules/auth/auth.service");

async function main() {
  await connectMongo();
  if (env.initialSuperAdmin.name && env.initialSuperAdmin.username && env.initialSuperAdmin.email && env.initialSuperAdmin.phone && env.initialSuperAdmin.password) {
    await ensureAdminSeed(env.initialSuperAdmin);
  }
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
