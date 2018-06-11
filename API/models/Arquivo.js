var mongoose = require('mongoose');

var ArquivoSchema = new mongoose.Schema({
    nome: String,
    nomeArquivo: String
});

module.exports = {
    Arquivo: mongoose.model('Arquivo', ArquivoSchema),
    ArquivoSchema: ArquivoSchema
} 
