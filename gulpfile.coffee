gulp       = require 'gulp'
browserify = require 'browserify'
babelify   = require 'babelify'
source     = require 'vinyl-source-stream'
$          = require('gulp-load-plugins')()

gulp.task 'browserify', ->
  browserify './jsx/app.jsx', debug: true
    .transform(babelify)
    .bundle()
    .on "error", (err)->
      console.log err
    .pipe source('bundle.js')
    .pipe gulp.dest('./public')

gulp.task 'sass', ->
  gulp.src 'sass/**/*'
    .pipe $.sass().on('error', (err) -> console.log(err))
    .pipe gulp.dest('./public/css')

gulp.task 'bower', ->
  $.bower().pipe(gulp.dest('./public/lib'))

gulp.task 'default', ['browserify', 'sass'],  ->
  gulp.watch '*.jsx', ['browserify']
  gulp.watch 'sass/**/*', ['sass']
