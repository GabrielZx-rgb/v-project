const Database = require("better-sqlite3");
const path = require("node:path");

// Define o caminho do banco de dados
const dbPath = path.resolve(__dirname, "database.db");
const db = new Database(dbPath);

// Log para depuração
console.log(`Banco de dados inicializado em: ${dbPath}`);

// Cria a tabela "users" se ela não existir
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )
`);

// Log para confirmar que a tabela foi criada ou já existia
console.log("Tabela 'users' verificada/criada com sucesso.");

module.exports = db;
