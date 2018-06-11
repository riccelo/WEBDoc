var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Projeto = require('../models/Projeto.js').Projeto;

router.route('/')
.get(function(req, res, next){
    Projeto.find({})
        .exec(function (err, projetos){
            console.log(err);
            if (err) return next(err);
            res.json(projetos);
        });
})
.post(function(req, res, next){
    var projeto = req.body;
    console.log(projeto);
    Projeto.create(projeto, function (err, novoProjeto){
        if (err) return next(err);

        res.json(novoProjeto);
    });
})
.put(function(req, res, next){    
    var projeto  = req.body;
    console.log("Atualizando...", projeto, req.body);
    Projeto.findOneAndUpdate({_id: req.body._id}, projeto, function (err, v){
        if (err) return next(err);
        res.json(v);
    });
})
.delete(function(req, res, next){
    console.log("Excluindo..")
    var id = req.body._id;  
    Projeto.findByIdAndRemove(id).exec();   
    return res.status(200).send("ok");
});

router.route("/:id").get(
    function(req, res, next){
        Projeto.findById(req.params.id, function (err, projeto){
                //console.log(err);
                if (err) return next(err);
                res.json(projeto);
            });
    });

// salvarTodasPastas = async function (pastaPai){
//     if (pastaPai && !pastaPai._id){
//         if (pastaPai.subPastas && pastaPai.subPastas.length > 0) {
//             for (i=0; i<pastaPai.subPastas.length; i++) {
//                 var pId;
//                  pId = await salvarTodasPastas(pastaPai.subPastas[i]);
//                  pastaPai.subPastas[i] = pId;
//             }
//             var  novaPasta = await Pasta.create(pastaPai);
//             return novaPasta._id;
//         } else {
//             var novaPasta = new Pasta();
//             novaPasta.nome = pastaPai.nome;
//             novaPasta.nivel = pastaPai.nivel;
//             novaPasta.descricao = pastaPai.descricao | '';
//             novaPasta.subPastas = undefined;

//             let nP = await novaPasta.save();
//             return novaPasta._id;
//         }
//     }
// };

module.exports = router;