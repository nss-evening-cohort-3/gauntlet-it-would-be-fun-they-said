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
  entries: ['./javascripts/main.js'],
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
gulp.task('default', ['lint', 'watch']); //add test?

gulp.task('lint', function() {
  return gulp.src('./javascripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
  gulp.watch(['./javascripts/**/*.js'], ['lint']);
});

// Makes watch keep watching even on JS error. Need to learn about gutil
var onError = function ( err ) {
  gutil.log( gutil.colors.green( err.message ) );
  this.emit( 'end' );
};
