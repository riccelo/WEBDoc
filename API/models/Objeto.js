var mongoose = require('mongoose');
var Classe = require('./Classe');
var { PropriedadeSchema } = require('./Propriedade');
var { Pasta } = require('./Projeto');
var { Arquivo } = require('./Arquivo');

var ObjetoSchema = new mongoose.Schema({
    nome: String,
    propriedades: [PropriedadeSchema],    
    classe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classe'
    },
    pasta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pasta'
    },
    arquivos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Arquivo'
    }],
    checkoutPor: Number,
    versaoAtual: Number,
});

module.exports = mongoose.model('Objeto', ObjetoSchema);
