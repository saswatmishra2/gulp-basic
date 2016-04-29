'use strict';

var gulp = require('gulp'), 
	gutil = require('gulp-util'), 
	connect = require('gulp-connect');

gulp.task('default', ['serve', 'watch']);


gulp.task('html', function() {
	gulp.src('./app/*.html').pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch([ './app/*.html' ], [ 'html' ]);
});

gulp.task('serve', function() {
	connect.server({
		livereload : true
	});
});
