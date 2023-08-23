import type { Config } from "drizzle-kit";
 
export default {
  schema: "./schema/*",
  out: "./drizzle",
  driver: 'mysql2',
  dbCredentials: {
    user: "migrant",
    password: "migrant",
    host: "127.0.0.1",
    port: 3306,
    database: "drizzle_simple",
  }
} satisfies Config;