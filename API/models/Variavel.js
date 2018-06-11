var mongoose = require('mongoose');

var VariavelSchema = new mongoose.Schema({
    nome: String,
    tipo: String,
    obrigatorio: Boolean,
    somenteLeitura: Boolean,
    valorPadrao: Object
});

module.exports = mongoose.model('Variavel', VariavelSchema);
