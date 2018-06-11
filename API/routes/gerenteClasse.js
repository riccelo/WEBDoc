var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Classe = require('../models/Classe.js');

router.route('/')
    .get(function(req, res, next){
    Classe.find({})
        .populate('variaveis')
        .exec(function (err, classes){
            if (err) return next(err);
            res.json(classes);
        });
    })
    .post(
        function(req, res, next){
            Classe.create(req.body, function (err, post){
                if (err) return next(err);
        
                res.json(post);
            });
        });

router.route('/:id').get(function(req, res, next){
    var id = req.params.id;
    console.log(id);
    Classe.findById(id)
    .populate('variaveis')
    .exec(function (err, classes){
            if (err) return next(err);
            res.json(classes);
        });
});

router.put('/', function(req, res, next){    
    var classe  = req.body;
    console.log("Atualizando...");
    Classe.findOneAndUpdate({_id: req.body._id}, classe, function (err, v){
        if (err) return next(err);
        res.json(v);
    });
});

router.post('/delete/', function(req, res, next){
    console.log("Excluindo..")
    var id = req.body._id;  
    Classe.findByIdAndRemove(id).exec();   
    return res.status(200).send("ok");
});

module.exports = router;