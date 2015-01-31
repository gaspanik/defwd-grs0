var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

var paths = {
  'scss': './scss/*.scss',
  'css': './dist/css'
}

gulp.task('scss', function() {
  return gulp.src(paths.scss)
    .pipe(sass())
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(gulp.dest(paths.css))
});

gulp.task('watch', function() {
  gulp.watch([paths.scss], ['scss']);
});

gulp.task('default', ['scss', 'watch']);
