var mongoose = require('mongoose');
var ProjetoSchema = require('./Projeto').ProjetoSchema;
var PastaSchema = require('./Projeto').PastaSchema;

var ProjetoProducaoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  pastaRaiz: PastaSchema,
  projetoModelo: ProjetoSchema
});

module.exports = mongoose.model('ProjetoProducao', ProjetoProducaoSchema);