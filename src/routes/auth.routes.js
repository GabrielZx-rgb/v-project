const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/auth.controller");

// Teste rápido de conexão
router.get("/ping", (req, res) => {
	res.send("pong");
});

// Login
router.post("/login", login);

// Registro (cadastro de novo usuário)
router.post("/register", register);

module.exports = router;
