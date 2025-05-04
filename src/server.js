const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.routes");

app.use(express.json()); // Permite o uso de JSON no body das requisições
app.use("/auth", authRoutes); // Usa as rotas de autenticação
app.use(express.static("public"));

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`);
});
