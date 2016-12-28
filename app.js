var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var index = require('./routes/index');
var serviceHardware = require('./routes/hardware');
var serviceVirus = require('./routes/virus');
var serviceTuneup = require('./routes/tuneup');
<<<<<<< HEAD
var contact = require('./routes/contact');
var about = require('./routes/about');
=======
>>>>>>> 1e3c93bef808306480bb349ffc79270b9050ba49

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/hardware', serviceHardware);
app.use('/virus', serviceVirus);
app.use('/tuneup', serviceTuneup);
<<<<<<< HEAD
app.use('/about', about);
app.use('/contact', contact);
=======
>>>>>>> 1e3c93bef808306480bb349ffc79270b9050ba49

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
