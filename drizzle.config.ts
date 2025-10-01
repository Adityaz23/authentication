import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./app/drizzle/scehma.ts",
    out: "./app/drizzle/migrations",
    dialect: "postgresql",
    dbCredentials:{
        url: process.env.DATABASE_URL!,
    },
})
