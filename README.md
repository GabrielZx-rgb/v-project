# V-Project

Aplicação web simples de autenticação com Node.js e SQLite.

## Funcionalidades

- Cadastro de usuários com:
  - Nome de usuário (único)
  - Email (único)
  - Senha
- Login com:
  - Nome de usuário **ou**
  - Email
- Interface web com páginas de login e cadastro
- Armazenamento de dados local usando SQLite (`better-sqlite3`)

## Como usar

### 1. Instale as dependências

```bash
npm install
```

### 2. Inicie o servidor

```bash
node server.js
```

### 3. Acesse no navegador

```
http://localhost:3000
```

> Observação: esta versão **não utiliza autenticação com JWT** nem criptografia de senha. Não use em produção sem implementar essas proteções básicas.

---

## Estrutura do Projeto

```
/
├── controllers/
│   └── auth.controller.js
├── routes/
│   └── auth.routes.js
├── public/
│   ├── login.html
│   ├── register.html
│   ├── login.js
│   ├── style.css
│   └── logo.png
├── database.js
├── server.js
├── .gitignore
└── README.md
```

## Autor

GabrielZx-rgb
