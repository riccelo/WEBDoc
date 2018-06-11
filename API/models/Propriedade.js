var mongoose = require('mongoose');
var Variavel = require('./Variavel');

var PropriedadeSchema = new mongoose.Schema({
    variavel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Variavel'
    },
    valor : Object
});

var Propriedade = mongoose.model('Propriedade', PropriedadeSchema);

module.exports = {
    Propriedade: Propriedade,
    PropriedadeSchema: PropriedadeSchema
}

