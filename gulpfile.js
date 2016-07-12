var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var reactRoot = __dirname + "/src/main/react/";
var reactJSRoot = reactRoot + "js/";
var reactCSSRoot = reactRoot + "css/";

var buildDir = "build/";
var targetPackage = "resources/main/public/";

gulp.task('build', function () {
    browserify({
        entries: reactJSRoot + 'app.jsx',
        extensions: ['**.jsx'],
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source(targetPackage + 'app.js'))
        .pipe(gulp.dest(buildDir));
});

gulp.task('sass', function () {
    return gulp.src(reactCSSRoot + "/app.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(buildDir + targetPackage));
});

gulp.task('watch', ['sass', 'build'],function () {
    // Endless stream mode
    gulp.watch(reactCSSRoot + '**/*.{scss,css}', ['sass']);
    gulp.watch(reactJSRoot + '**/*.{js,jsx}', ['build']);
});

gulp.task('default', ['build', 'sass']);