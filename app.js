var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server)
var routes = require('./routes/index');
var users = require('./routes/users');
var ejs = require('ejs');


app.set('view engine', 'ejs');
app.engine('ejs',ejs.renderFile);
app.use(express.static('/socket.io'));
app.use(express.static(__dirname + '/public'));



function new_text(list){
  socket.emit('new_text',list);


}

io.on('connection',function(socket){
  socket.on('before_req',function(list){
    new_text(list);
  });
  socket.on('after_req',function(list){
    new_text(list);
  });
  socket.on('answer_req',function(list){
    new_text(list);
  });
  socket.on('problem_req',function(list){
    new_text(list);
  });
});


app.get('/public/stylesheets/style.css', function(req, res) {
    res.sendfile(__dirname + '/public/stylesheets/style.css');
});

app.get('/common/plug/socket.io-1.4.5.js ', function(req, res) {
    res.sendfile(__dirname + '/common/plug/socket.io-1.4.5.js ');
});
app.get('/public/javascripts/vue.js', function(req, res) {
    res.sendfile(__dirname + '/public/javascripts/vue.js');
});
var index = require('./routes/index');
app.use('/', index);

var user = require('./routes/users');
app.use('/user', user);



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
