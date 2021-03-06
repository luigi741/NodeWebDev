//===================================================================
// server.js
// Server side code
// By: Luis Castro
//===================================================================

// Require NPM packages
var http = require('http');
var jade = require('jade');
var express = require('express');
var $ = require('jquery');
var path = require('path');
var moment = require('moment');
var favicon = require('serve-favicon');
var server = http.createServer(app);
server.listen(port);

// App routing
var app = express();
var port = 80;
var router = require('./app/routes');

// Set static files (css/images) location
app.use(favicon(path.join(__dirname, 'public/img', 'CPU.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);
app.set('view engine', 'jade');

app.listen(port, function() {
    console.log('App started!');
});
