var express = require('express');
var routes = require('./routes/index');
var users = require('./routes/users');
var ejs = require('ejs');
var app = express();

// view engine setup
app.set('view engine', 'ejs');
app.engine('ejs',ejs.renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(express.static('public'));

var mysql      = require('mysql');
var connection = mysql.createConnection({
  database : 'granfrontend_work',
  host     : 'localhost',
  user     : 'root',
  password : ''
});


app.get('/',function(req,res) {
  connection.query('SELECT * FROM `user`', function (error, results, fields) {
    console.log(results);
    res.render('index.ejs',{
      title: 'Hello World!',
      content: 'Hello World!',
      sql: results
    });
  });


});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
app.listen(3000);


module.exports = app;
