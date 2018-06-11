var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/Project.js');

router.post('/', function(req, res, next){
    Project.create(req.body, function (err, post){
        if (err) return next(err);

        res.json(post);
    });
});

router.get('/', function(req, res, next){
    Project.find(function (err, projects){
        if (err) return next(err);

        res.json(projects);
    });
});

module.exports = router;