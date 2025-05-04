const Database = require("better-sqlite3");
const path = require("node:path");

const dbPath = path.resolve(__dirname, "database.db");
const db = new Database(dbPath);

// Recria a tabela com a coluna email, se necessário
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )
`);

module.exports = db;
