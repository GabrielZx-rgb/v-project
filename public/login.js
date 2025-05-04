document.getElementById("loginForm").addEventListener("submit", async (e) => {
	e.preventDefault();

	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	const response = await fetch("/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username, password }),
	});

	const result = await response.json();
	const messageElement = document.getElementById("message");

	if (response.ok) {
		messageElement.textContent = result.message;
		// Redirecionar para outra página após login bem-sucedido
		window.location.href = "/dashboard.html";
	} else {
		messageElement.textContent = result.message;
	}
});
