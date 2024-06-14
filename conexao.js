const mongoose = require('mongoose');

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose.connect('mongodb://localhost:27017/livraria', options)
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

module.exports = mongoose;



