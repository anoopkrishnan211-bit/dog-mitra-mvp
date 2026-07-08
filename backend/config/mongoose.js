const mongoose = require("mongoose");

let cached = global.__dogMitraMongoose;

if (!cached) {
  cached = global.__dogMitraMongoose = {
    conn: null,
    promise: null,
  };
}

function readEnv(name) {
  const value = process.env[name];
  if (!value || !value.trim()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value.trim();
}

async function connectMongo() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const uri = readEnv("MONGODB_URI");
    const dbName = readEnv("MONGODB_DB_NAME");

    cached.promise = mongoose
      .connect(uri, {
        dbName,
        maxPoolSize: 10,
        minPoolSize: 2,
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 45000,
        family: 4,
      })
      .then((mongooseInstance) => {
        console.log(`[MongoDB] Connected to ${dbName}`);
        return mongooseInstance;
      })
      .catch((error) => {
        cached.promise = null;
        console.error("[MongoDB] Connection failed:", error.message);
        throw error;
      });
  }

  cached.conn = await cached.promise;

  mongoose.connection.on("disconnected", () => {
    console.warn("[MongoDB] Connection dropped. Awaiting automatic reconnection.");
    cached.conn = null;
    cached.promise = null;
  });

  mongoose.connection.on("error", (error) => {
    console.error("[MongoDB] Connection error:", error.message);
  });

  return cached.conn;
}

async function closeMongo() {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.close(false);
    console.log("[MongoDB] Connection closed");
  }
  cached.conn = null;
  cached.promise = null;
}

function registerShutdownHooks(app) {
  const shutdown = async (signal) => {
    try {
      console.log(`[MongoDB] Received ${signal}, closing connection...`);
      await closeMongo();
    } catch (error) {
      console.error("[MongoDB] Shutdown close failed:", error.message);
    } finally {
      if (app && typeof app.close === "function") {
        app.close(() => process.exit(0));
      } else {
        process.exit(0);
      }
    }
  };

  process.once("SIGINT", () => shutdown("SIGINT"));
  process.once("SIGTERM", () => shutdown("SIGTERM"));
}

module.exports = {
  connectMongo,
  closeMongo,
  registerShutdownHooks,
};
