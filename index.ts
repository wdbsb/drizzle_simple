import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { migrate } from 'drizzle-orm/mysql2/migrator';

const connection = await mysql.createConnection({
    user: "migrant",
    password: "migrant",
    host: "127.0.0.1",
    port: 3306,
    database: "drizzle_simple",
});
const db = drizzle(connection, {logger: false} );
// this will automatically run needed migrations on the database
await migrate(db, { migrationsFolder: './drizzle' });
console.log("done")
connection.end() 