const gulp = require('gulp');
const replace = require('gulp-replace');
const cheerio = require('gulp-cheerio');

const paths = {
    config: ['./package.json']
};

function configTask() {
    return gulp.src(['config.xml'])
        .pipe(cheerio({
            run: function ($) {
                // get the version number from package.json
                $('widget').attr('version', require('./package').version);
                $('widget').attr('id', require('./package').id);
                $('name').text(require('./package').name);
                $('description').text(require('./package').description);
                $('author').text(require('./package').author);
                $('author').attr('email', require('./package').author);
                $('author').attr('href', require('./package').homepage);

                // in development launch the app with a different html file
                //$('content').attr('src', process.env.NODE_ENV == 'development' ? 'debug.html' : 'index.html');

            },
            parserOptions: {
                xmlMode: true
            }
        }))
        .pipe(gulp.dest('.'));
}

function configSrcTask() {
    const version = "const version = '" + require('./package').version + "';";
    return gulp.src(['src/app/shared/version.const.ts'])
    // See http://mdn.io/string.replace#Specifying_a_string_as_a_parameter
        .pipe(replace(/const version = '(.*)';/g, version))
        .pipe(gulp.dest('src/app/shared/'));
}

const fidjAppId = process.env.FIDJ_APP_ID || 'demo';
const fidjProd = process.env.FIDJ_APP_PROD || 'true';
const fidjLogLevel = parseInt(process.env.FIDJ_LOG_LEVEL) || 0;

gulp.task('config:www', function () {

    if (fidjAppId && fidjProd && fidjLogLevel >= 0 ) {
        return gulp.src(['www/main.js'])
            .pipe(replace(/fidjService.init.*/g, "fidjService.init('" + fidjAppId + "', { prod: " + fidjProd + ", logLevel: " + fidjLogLevel + " })"))
            .pipe(gulp.dest('www/'));
    } else {
        return Promise.resolve();
    }

});

gulp.task('config', configTask);

gulp.task('config-src', configSrcTask);

gulp.task('default', gulp.series(configTask, configSrcTask));
//gulp.task('default', gulp.series(configSrcTask));

gulp.task('watch', function () {
    gulp.watch(paths.config, ['config', 'config-src']);
});
