import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { neon } from '@neondatabase/serverless';
// import { drizzle } from "drizzle-orm/neon-http";





const sql = neon(process.env.DATABASE_URL!);



