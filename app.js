const express = require('express');
const cors = require('cors'); // Importar a biblioteca CORS
const livroRouter = require('./routes/livros'); // Importar o roteador de livros

const app = express();

app.use(cors()); // Configurar o CORS para permitir acesso de qualquer origem

// Rota raiz e rota de usuários
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Rota para o roteador de livros
app.use('/livros', livroRouter); // Adicionar rota para o roteador de livros

// Restante do código...
