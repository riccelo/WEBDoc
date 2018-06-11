var mongoose = require('mongoose');
var Variavel = require('./Variavel');

var ClasseSchema = new mongoose.Schema({
    nome: String,
    permitePasta: Boolean,
    icone: String,
    variaveis: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Variavel'
    }]
});

module.exports = mongoose.model('Classe', ClasseSchema);
