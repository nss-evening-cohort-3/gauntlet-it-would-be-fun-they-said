"use strict";

// This is my Frankenstein combo of the 2 sample gulpfiles
var jshint = require('gulp-jshint');
var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var gutil = require('gulp-util');
var assign = require('lodash.assign');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');


// add custom browserify options here
var customOpts = {
  entries: ['./javascripts/app.js'],
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var bundler = watchify(browserify(opts)); 
bundler.on('update', bundle); // on any dep update, runs the bundler
bundler.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return bundler.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist'));
}

gulp.task('bundle', bundle); // changed from the sample gulpfile. Was 'default'

gulp.task('default', ['bundle', 'lint', 'watch']); //add test?

gulp.task('lint', function() {
  return gulp.src('./javascripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
  gulp.watch(['./javascripts/**/*.js'], ['lint', 'bundle']);
});

// Makes watch keep watching even on JS error. Need to learn about gutil
var onError = function ( err ) {
  gutil.log( gutil.colors.green( err.message ) );
  this.emit( 'end' );
};
