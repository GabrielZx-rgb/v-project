const db = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY || "chave_padrao_insegura"; // Use variável de ambiente

async function register(req, res) {
	const { username, email, password } = req.body;

	// Validação de entrada
	if (!username || !email || !password) {
		return res
			.status(400)
			.json({ message: "Todos os campos são obrigatórios" });
	}

	try {
		const existing = db
			.prepare("SELECT * FROM users WHERE username = ? OR email = ?")
			.get(username, email);

		if (existing) {
			return res
				.status(409)
				.json({ message: "Usuário ou e-mail já cadastrado" });
		}

		const hashedPassword = bcrypt.hashSync(password, 10);

		db.prepare(
			"INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
		).run(username, email, hashedPassword);

		res.status(201).json({ message: "Usuário registrado com sucesso!" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Erro ao registrar usuário" });
	}
}

async function login(req, res) {
	const { username, password } = req.body;

	// Validação de entrada
	if (!username || !password) {
		return res
			.status(400)
			.json({ message: "Todos os campos são obrigatórios" });
	}

	try {
		const user = db
			.prepare("SELECT * FROM users WHERE username = ? OR email = ?")
			.get(username, username);

		if (!user) {
			return res.status(401).json({ message: "Credenciais inválidas" });
		}

		const passwordMatch = bcrypt.compareSync(password, user.password);

		if (!passwordMatch) {
			return res.status(401).json({ message: "Credenciais inválidas" });
		}

		const token = jwt.sign(
			{ id: user.id, username: user.username },
			SECRET_KEY,
			{
				expiresIn: "1h",
			},
		);

		res.status(200).json({ message: "Login bem-sucedido!", token });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Erro ao realizar login" });
	}
}

module.exports = {
	register,
	login,
};
