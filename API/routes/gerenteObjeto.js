var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Objeto = require('../models/Objeto.js');

router.route('/pasta/:id')
    .get(function(req, res, next){
    Objeto.find({'pasta': req.params.id})
        .populate('variaveis')
        .exec(function (err, objetos){
            if (err) return next(err);
            res.json(objetos);
        });
    })
    .post(
        function(req, res, next){
            Objeto.create(req.body, function (err, post){
                if (err) return next(err);
        
                res.json(post);
            });
        });

router.route('/:id').get(function(req, res, next){
    var id = req.params.id;
    console.log(id);
    Objeto.findById(id)
    .populate('classes')
    .exec(function (err, objeto){
            if (err) return next(err);
            res.json(objeto);
        });
});

router.put('/', function(req, res, next){    
    var objeto  = req.body;
    console.log("Atualizando...");
    Objeto.findOneAndUpdate({_id: req.body._id}, objeto, function (err, v){
        if (err) return next(err);
        res.json(v);
    });
});

router.post('/delete/', function(req, res, next){
    console.log("Excluindo..")
    var id = req.body._id;  
    Objeto.findByIdAndRemove(id).exec();   
    return res.status(200).send("ok");
});

module.exports = router;