const express = require('express');
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

const router = express.Router();

// Rota GET para obter todos os livros
router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao obter os livros', error: err });
  }
});

// Rota POST para incluir um novo livro
router.post('/', async (req, res) => {
  try {
    const novoLivro = req.body;
    await incluir(novoLivro);
    res.json({ message: 'Livro incluído com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao incluir o livro', error: err });
  }
});

// Rota DELETE para excluir um livro por código (_id)
router.delete('/:codigo', async (req, res) => {
  try {
    const codigo = req.params.codigo;
    await excluir(codigo);
    res.json({ message: 'Livro excluído com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir o livro', error: err });
  }
});

module.exports = router;


