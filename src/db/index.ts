import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";


const client = new Pool({
  host: process.env.DATABASE_URL,
  port: Number(process.env.DATABASE_PORT),
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  user: process.env.DATABASE_USER,
});

client.connect().then(() => {
  console.log("Database connection established.");
}).catch((error) => {
  console.error("Error connecting to the database:", error);
});

export const db = drizzle({ client });