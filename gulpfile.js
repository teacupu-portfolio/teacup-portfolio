var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var imagemin = require('gulp-imagemin');
sass.compiler = require('node-sass');
//gulp sass
gulp.task('sass', function () {
    return gulp
        .src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/*.scss', ['sass']);
});

//gulp pt uglifycss
gulp.task('css', function () {
    gulp
        .src('./css/*.css')
        .pipe(
            uglifycss({
                uglyComments: true
            })
        )
        .pipe(gulp.dest('./dist/'));
});
//gulp pt imagemin
gulp.task('imagemin', () =>
    gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);