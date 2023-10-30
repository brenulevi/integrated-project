import { Pool } from "pg";

const db : Pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: "localhost",
    port: 5432,
    database: "djkjoias"
});

export default db;