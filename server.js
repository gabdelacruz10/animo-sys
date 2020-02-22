var http = require('http');
var port = 3000;
var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/html', { index: 'login.html' }));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/scripts', express.static(__dirname + '/scripts'));

http.createServer(app).listen(port, function () {
    console.log("i love u " + port);
});

