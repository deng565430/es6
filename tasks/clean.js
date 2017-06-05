const gulp = require('gulp');
const del = require('del');
const args = require('./util/args');

gulp.task('clean',()=>{
  return del(['server/public','server/views'])
})
