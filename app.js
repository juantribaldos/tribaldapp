var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var models = require("./models/index.js");
var routes = require('./routes');
var user   = require('./routes/user');
var path   = require('path');
//var db     = require('./models/index');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
//app.use(express.bodyParser());
app.use(bodyParser.json());
//app.use(express.methodOverride());
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// development only
//if ('development' === app.get('env')){
// app.use(express.errorHandler());
//   app.use(function(err, req, res, next){
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err,
//       //errors: []
//     });
//   });
//}

//app.get('/', routes.index);
//app.get('/users', user.list);

//db.sequelize.sync().then(function() {
//  http.createServer(app).listen(app.get('port'), function(){
//    console.log('Express server listening on port ' + app.get('port'));
//  });
//});

// error handler
// app.use(function(err, req, res, next) {
  // set locals, only providing error in development
 //  res.locals.message = err.message;
// // // // // // // // // // // // // // // // // // // 
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
  // render the error page
 //  res.status(err.status || 500);// 
//   res.render('error');
// });

module.exports = app;


//res.locals.error = req.app.get('env') === 'development' ? err : {};

