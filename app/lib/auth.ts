import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/app/drizzle/db"; // your drizzle instance
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    emailAndPassword:{
        enabled:true,
    },

    session:{
        cookieCache:{
            enabled:true,
            maxAge: 60 * 3, // this will logout the user after 3 minutes break if the user is not active
        },
    },
    plugins:[nextCookies()],
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"

    }),

});