var gulp = require('gulp');
var autorprefixer = require('gulp-autoprefixer');

gulp.task('styles', function(done) {
    gulp.src('style.css')
    .pipe(autorprefixer())
    .pipe(gulp.dest('build'))
    done()
});

gulp.task('watch', function() {
    gulp.watch('style.css', gulp.series('styles'));
});