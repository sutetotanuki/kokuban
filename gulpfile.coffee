gulp       = require 'gulp'
browserify = require 'browserify'
babelify   = require 'babelify'
source     = require 'vinyl-source-stream'
$          = require 'gulp-load-plugins'

gulp.task 'browserify', ->
  browserify './app.jsx', debug: true
    .transform(babelify)
    .bundle()
    .on "error", (err)->
      console.log err
    .pipe source('bundle.js')
    .pipe gulp.dest('./public')

gulp.task 'default', ['browserify'],  ->
  gulp.watch '*.jsx', ['browserify']
