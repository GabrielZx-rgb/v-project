const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY || "chave_padrao_insegura"; // Use variável de ambiente

function authenticateToken(req, res, next) {
	const authHeader = req.headers?.authorization;

	// Validação do cabeçalho Authorization
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res
			.status(401)
			.json({ message: "Token não fornecido ou mal formatado" });
	}

	const token = authHeader.split(" ")[1];

	try {
		const user = jwt.verify(token, SECRET_KEY);
		req.user = user; // Adiciona o usuário decodificado ao objeto req
		next();
	} catch (err) {
		console.error("Erro ao verificar token:", err.message);
		return res.status(403).json({ message: "Token inválido ou expirado" });
	}
}

module.exports = authenticateToken;
