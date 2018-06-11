var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Variavel = require('../models/Variavel.js');

router.get('/', function(req, res, next){
    Variavel.find({})
    .exec(function (err, variaveis){
        if (err) return next(err);
        res.json(variaveis);
    });
});

router.post('/', function(req, res, next){
    Variavel.create(req.body, function (err, post){
        if (err) return next(err);

        res.json(post);
    });
});

router.put('/', function(req, res, next){    
    var variavel  = req.body;
    console.log("Atualizando...", variavel, req.body);
    Variavel.findOneAndUpdate({_id: req.body._id}, variavel, function (err, v){
        if (err) return next(err);
        res.json(v);
    });
});

router.delete('/', function(req, res, next){
    console.log("Excluindo..")
    var id = req.body._id;  
    Variavel.findByIdAndRemove(id).exec();   
    return res.status(200).send("ok");
});

module.exports = router;