const gulp = require('gulp');
const gulpif = require('gulp-if');
const gutil = require('gulp-util');
const args = require('./util/args');

gulp.task('browser',(cb)=>{
  if(!args.watch) return cb();
  gulp.watch('app/**/*.js',['scripts']);
  gulp.watch('app/**/*.ejs',['pages']);
  gulp.watch('app/**/*.css',['css']);
});
