const express = require("express");
const cors = require("cors");
const path = require("node:path");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");

const app = express();

// Middleware para JSON no corpo das requisições
app.use(express.json());

// Middleware para CORS
app.use(cors());

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "..", "public")));

// Rotas
app.use("/auth", authRoutes);

// Rota principal serve login.html
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "public", "login.html"));
});

// Middleware para tratamento de erros globais
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: "Erro interno do servidor." });
});

// Inicia servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`);
});
