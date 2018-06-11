var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db', 
    (err) => {
      if (err) console.log(err);
    });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var projectRouter = require('./routes/projectTemplate')
var variaveisRouter = require('./routes/gerenteVariavel')
var classesRouter = require('./routes/gerenteClasse')
var projetosRouter = require('./routes/gerenteProjeto')
var projetosProducaoRouter = require('./routes/gerenteProjetoProducao')
var objetosRouter = require('./routes/gerenteObjeto')
var uploadRouter = require('./routes/upload')

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/project', projectRouter);
app.use('/variaveis', variaveisRouter);
app.use('/classes', classesRouter);
app.use('/projetos', projetosRouter);
app.use('/projetosproducao', projetosProducaoRouter);
app.use('/objetos', objetosRouter);
app.use('/upload', uploadRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log(req);
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
