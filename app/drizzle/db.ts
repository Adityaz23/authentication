import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from "./schema";
export const db = drizzle(process.env.DATABASE_URL! ,{schema});

// db.query.user.findMany() access to all the tables which are in the auth-schemas.ts file.