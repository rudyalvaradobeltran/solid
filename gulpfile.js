var gulp = require('gulp');
var del = require('del');

gulp.task('clean:output', function () {
  return del([
    '**/*.js', '!./gulpfile.js', '!./node_modules'
  ]);
});

gulp.task('default', gulp.series(['clean:output']));