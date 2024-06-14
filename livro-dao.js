const Livro = require('./livro-schema');


const obterLivros = async () => {
  try {
    return await Livro.find();
  } catch (err) {
    console.error('Erro ao obter os livros:', err);
  }
};

const incluir = async (livro) => {
  try {
    return await Livro.create(livro);
  } catch (err) {
    console.error('Erro ao incluir o livro:', err);
  }
};


const excluir = async (codigo) => {
  try {
    return await Livro.deleteOne({ _id: codigo });
  } catch (err) {
    console.error('Erro ao excluir o livro:', err);
  }
};


module.exports = {
  obterLivros,
  incluir,
  excluir
};
