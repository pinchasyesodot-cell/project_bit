import "dotenv/config";
import env from "env-var";

export const config = {
  PORT: env.get("PORT").required().asPortNumber(),
  NODE_ENV: env.get("NODE_ENV").default("development").asString(),
  MONGO_URI: env.get("MONGO_URI").required().asString(),
};
