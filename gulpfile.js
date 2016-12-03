var gulp = require('gulp');
var changed = require('gulp-changed');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var csscomb = require('gulp-csscomb');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var concatCss = require('gulp-concat-css');

var base = process.cwd() + '/';
var theme = 'themes/commander-aipa/'
var paths = {
    base   : base,
    scss   : base + theme + 'static/scss/**/*.scss',
    distCss: base + theme + 'static/css/',
};

gulp.task('sass', function() {
    var processors = [
        cssnext({browsers: ['> 0%']})
    ];
    return gulp.src(paths.scss)
        .pipe(plumber())
        .pipe(changed(paths.scss))
        .pipe(sass({
            errLogToConsole: true,
            sourceComments: false
        }))
        .pipe(csscomb())
        .pipe(postcss(processors))
        .pipe(concatCss('bundle.css'))
        .pipe(gulp.dest(paths.distCss));
});

gulp.task('watch', function() {
    gulp.watch(paths.scss,['sass']);
});

gulp.task('default', ['watch']);
