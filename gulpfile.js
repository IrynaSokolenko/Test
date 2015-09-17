var gulp  = require('gulp'),
    gulpEjs = require('gulp-ejs-template'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var jsSources = ['sources/javascript/*.js','sources/javascript/*/*.js'];
var jsDeps = gulp.src(['js/*jquery*', 'js/*bootstrap*'])

gulp.task('ejsTemplate', function () {
    return gulp.src('sources/templates/*.ejs')
        .pipe(gulpEjs({
            moduleName: 'templates'
        }))
        .pipe(gulp.dest('public/templates'));
});

gulp.task('default', ['ejsTemplate', 'concat']);

gulp.task('concat', function() {
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});
