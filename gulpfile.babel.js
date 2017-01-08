'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';

gulp.task('default', ['sass'])
gulp.task('dev', () => {
    gulp.watch('src/**/*.scss', ['sass'])
})

gulp.task('sass', () => {
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
});
