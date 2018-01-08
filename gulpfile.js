'use strict';

var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	minify = require('gulp-cssnano'),
	rename = require('gulp-rename');

//Compile sass task
gulp.task('style', function(){
	 (sass('app/scss/**/style.scss', {
		loadPath: [ 'app/scss/'] }))
		.pipe(autoprefixer('last 2 versions'))
        .on('error', errorLog)
		.pipe(gulp.dest('app/css/'))
});	

// Uglify js files
gulp.task('js', function(){
	gulp.src('app/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('app/js/min'))
})

//Copy icons to production folder
gulp.task('icons', function() {
  gulp.src('node_modules/font-awesome/scss/**.*')
    .pipe(gulp.dest('./app/scss/'));
});

gulp.task('fonts', function() {
  gulp.src('node_modules/font-awesome/fonts/**.*')
    .pipe(gulp.dest('./app/fonts/'));
});

//Minify css file task
gulp.task('minify-css', function(){
	gulp.src('app/css/*.css')
	.pipe(minify())
	.pipe(rename('style.min.css'))
	.pipe(gulp.dest('app/css/min'))

});

//Watch task
gulp.task('watch', function(){
	gulp.watch('app/scss/**/*.scss', ['style']);
	gulp.watch('app/css/*.css', ['minify-css']);
	gulp.watch('app/js/*.js', ['js']);
});

function errorLog(error){
	console.error.bind(error);
	this.emit('end');
}

gulp.task('default', ['style', 'js', 'icons', 'fonts', 'minify-css', 'watch']);