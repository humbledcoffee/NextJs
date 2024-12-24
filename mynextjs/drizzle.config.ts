import "dotenv/config";
import * as dotenv from "dotenv";
dotenv.config({
  path:'.env/local'
});
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  out: "./server/migrations",
  schema: "./server/schema.ts",
  dbCredentials: {
    host: "ep-curly-shape-a1myl3sg-pooler.ap-southeast-1.aws.neon.tech",
    port: 5432, // 确认 PostgreSQL 使用的端口
    user: "NextjsPractice_owner",
    password: "SsvboF8DN7JA",
    database: "NextjsPractice",
    ssl: { rejectUnauthorized: false }, // 根据需要配置 SSL
  },
});