document.getElementById("loginForm").addEventListener("submit", async (e) => {
	e.preventDefault();

	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const messageElement = document.getElementById("message");
	const loginButton = document.querySelector("button[type='submit']");

	// Validação de campos
	if (!username || !password) {
		messageElement.textContent = "Por favor, preencha todos os campos.";
		messageElement.style.color = "red";
		return;
	}

	loginButton.disabled = true;
	loginButton.textContent = "Entrando...";

	try {
		const response = await fetch("/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});

		const result = await response.json();

		if (response.ok) {
			messageElement.textContent = result.message;
			messageElement.style.color = "green";
			window.location.href = "/import.html";
		} else {
			messageElement.textContent = result.message;
			messageElement.style.color = "red";
		}
	} catch (error) {
		messageElement.textContent =
			"Erro ao tentar fazer login. Tente novamente mais tarde.";
		messageElement.style.color = "red";
	} finally {
		loginButton.disabled = false;
		loginButton.textContent = "Entrar";
	}
});
