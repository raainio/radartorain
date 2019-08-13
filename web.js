var express = require('express');
var gulp = require('gulp');
var replace = require('gulp-replace');

var app = express();
var port = Number(process.env.PORT || 8080);
var fidjAppId = process.env.FIDJ_APP_ID || 'demo';
var fidjProd = process.env.FIDJ_APP_PROD || 'true';
var fidjLogLevel = parseInt(process.env.FIDJ_LOG_LEVEL) || 1;

gulp
    .src(['www/main.js'])
    .pipe(replace(/fidjService.init.*/g, "fidjService.init('" + fidjAppId + "', { prod: " + fidjProd + ", logLevel: " + fidjLogLevel + " })"))
    .pipe(gulp.dest('www/'))
    .on('end', function () {

        app.use(express.static(__dirname + '/www'));
        app.get('*', (request, response) => {
            response.sendFile(__dirname+ '/www/index.html');
        });
        var server = app.listen(port, function () {
            console.log('Listening on port %d', server.address().port);
        });

    });
