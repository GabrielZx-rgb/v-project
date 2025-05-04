const db = require("../database");

function register(req, res) {
	const { username, email, password } = req.body;

	const existing = db
		.prepare("SELECT * FROM users WHERE username = ? OR email = ?")
		.get(username, email);

	if (existing) {
		return res.status(409).json({ message: "Usuário ou e-mail já cadastrado" });
	}

	db.prepare(
		"INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
	).run(username, email, password);

	res.status(201).json({ message: "Usuário registrado com sucesso!" });
}

function login(req, res) {
	const { username, password } = req.body;

	// Tenta encontrar por email ou username
	const user = db
		.prepare(
			"SELECT * FROM users WHERE (username = ? OR email = ?) AND password = ?",
		)
		.get(username, username, password);

	if (!user) {
		return res.status(401).json({ message: "Credenciais inválidas" });
	}

	res.status(200).json({ message: "Login bem-sucedido!" });
}

module.exports = {
	register,
	login,
};
