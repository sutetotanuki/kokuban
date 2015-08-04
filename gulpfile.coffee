gulp       = require 'gulp'
browserify = require 'browserify'
babelify   = require 'babelify'
source     = require 'vinyl-source-stream'
$          = require('gulp-load-plugins')()
browserSync = require 'browser-sync'

gulp.task 'browserify', ->
  browserify './jsx/app.jsx', debug: true
    .transform(babelify)
    .bundle()
    .on "error", (err)->
      console.log err
    .pipe source('bundle.js')
    .pipe gulp.dest('./public')
    .pipe browserSync.stream()

gulp.task 'sass', ->
  gulp.src 'sass/**/*'
    .pipe $.sass().on('error', (err) -> console.log(err))
    .pipe gulp.dest('./public/css')
    .pipe browserSync.stream()

gulp.task 'bower', ->
  $.bower().pipe(gulp.dest('./public/lib'))

gulp.task 'server', ->
  browserSync.init
    proxy: "localhost:3123"

gulp.task 'default', ['browserify', 'sass', 'server'],  ->
  gulp.watch './jsx/*.jsx', ['browserify']
  gulp.watch 'sass/**/*', ['sass']
