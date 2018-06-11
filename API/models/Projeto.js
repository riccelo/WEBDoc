var mongoose = require('mongoose');
var Classe = require('./Classe');

var PastaSchema = new mongoose.Schema({
  nome: String,
  nivel: Number,
  descricao: String,
  classes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Classe'
    }]
});

PastaSchema.add({subPastas: [PastaSchema]});

var ProjetoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  pastaRaiz: PastaSchema
});

module.exports = {
  PastaSchema: PastaSchema,
  ProjetoSchema: ProjetoSchema,
  Projeto: mongoose.model('Projeto', ProjetoSchema)
};