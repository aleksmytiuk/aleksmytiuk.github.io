var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');
    jade = require('gulp-jade');

gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('jade', function() {
    return gulp.src('app/jade/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('app'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass', 'jade'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/jade/**/*.jade', ['jade']);
});
