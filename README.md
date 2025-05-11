# V-Project

Aplicação web de autenticação e gerenciamento de processos com Node.js, SQLite e uma interface web.

## Funcionalidades

- **Cadastro de usuários**:
  - Nome de usuário (único)
  - Email (único)
  - Senha (armazenada com hash usando `bcrypt`)
- **Login de usuários**:
  - Autenticação com nome de usuário **ou** email
  - Geração de token JWT para autenticação
- **Proteção de rotas**:
  - Middleware para validação de token JWT
- **Interface web**:
  - Páginas de login, cadastro, importação de processos e dashboard
  - Design responsivo com HTML e CSS
- **Gerenciamento de processos**:
  - Upload de arquivos no formato `.xlsx` ou `.csv` (simulado)
- **Armazenamento de dados**:
  - Banco de dados SQLite usando `better-sqlite3`

---

## Como usar

### 1. Instale as dependências

```bash
yarn install
```

### 2. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
SECRET_KEY=sua_chave_secreta_segura
PORT=3000
```

### 3. Inicie o servidor

```bash
yarn start
```

### 4. Acesse no navegador

```
http://localhost:3000
```

---

## Estrutura do Projeto

```
/
├── public/                # Arquivos estáticos (frontend)
│   ├── login.html         # Página de login
│   ├── register.html      # Página de cadastro
│   ├── import.html        # Página de importação de processos
│   ├── dashboard.html     # Página do dashboard
│   ├── style.css          # Estilos globais
│   ├── login.js           # Lógica de login no frontend
│   └── logo.png           # Logo do sistema
├── src/                   # Código do backend
│   ├── server.js          # Arquivo principal do servidor
│   ├── database.js        # Configuração do banco de dados SQLite
│   ├── controllers/       # Controladores
│   │   └── auth.controller.js # Lógica de autenticação
│   ├── middleware/        # Middlewares
│   │   └── auth.middleware.js # Middleware para validação de token JWT
│   └── routes/            # Rotas
│       └── auth.routes.js # Rotas de autenticação
├── .env                   # Variáveis de ambiente
├── package.json           # Configuração do projeto Node.js
├── yarn.lock              # Arquivo de lock do Yarn
└── README.md              # Documentação do projeto
```

---

## Tecnologias Utilizadas

- **Backend**:
  - Node.js
  - Express
  - SQLite (`better-sqlite3`)
  - JWT (`jsonwebtoken`)
  - Bcrypt para hash de senhas
- **Frontend**:
  - HTML5, CSS3 e JavaScript
- **Outras Ferramentas**:
  - Nodemon para desenvolvimento
  - Yarn para gerenciamento de pacotes

---

## Autor

GabrielZx-rgb

---

## Observações

- Este projeto é uma aplicação de exemplo e **não deve ser usado em produção sem ajustes adicionais**, como:
  - Validação mais robusta de entrada de dados
  - Configuração de HTTPS
  - Melhorias na segurança do token JWT
- Para contribuições ou dúvidas, entre em contato!