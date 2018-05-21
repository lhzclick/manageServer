var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ipfilter = require('express-ipfilter').IpFilter;
var app = express();
var ips = require('./common/ips');
var ipban = require('./common/ipban.js');
var pushMessage = require('./common/pushMessage.js');

//setInterval(function(){
//    pushMessage("gift","新手大礼包");
//    pushMessage("may","五月妖股");
//    pushMessage("may2","五月妖股(微信渠道)");
//    pushMessage("goldMay","五月掘金机会");
//},1000*5)


//app.use(ipban());
//app.use(ipfilter(ips.ipList,{detectIp:customDetection,mode: 'allow'}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var index = require('./routes/index');
var manageApi = require('./routes/manageApi');



function customDetection(req){
    var ipAddress;

    ipAddress = req.connection.remoteAddress.replace(/\//g, '.');

    return ipAddress;
}


//app.use(ipfilter(ips.ipList, {mode: 'allow'}));

app.use('/', index);
app.use('/manageApi', manageApi);




// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}


// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
