import "dotenv/config";

import { Config } from "drizzle-kit";



export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/drizzle",
  dialect: "postgresql", 
  dbCredentials: {
    host: process.env.DATABASE_URL,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    ssl: false,
  },
} as Config;

// export default defineConfig({

//   schema: "./src/db/schema.ts",
//   out: "./src/db/migrations",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: process.env.DATABASE_URL!,
//   },

// });