const mongoose = require('./conexao');

const LivroSchema = new mongoose.Schema({
  codLivro: { type: Number, required: true },
  titulo: { type: String, required: true },
  codEditora: { type: Number, required: true }
});

const Livro = mongoose.model('Livro', LivroSchema,'livros');

module.exports = Livro;
