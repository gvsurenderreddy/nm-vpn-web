var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

// Define some paths.
var paths = {
	pages: ['./src/*.html'],
	appJs: ['./src/app.js'],
	js: ['src/**/*.js'],
	out: 'dist'
};

gulp.task('pages', function () {
	gulp.src(paths.pages)
		.pipe(gulp.dest(paths.out));
});

gulp.task('js', function() {
	// Browserify/bundle the JS.
	browserify(paths.appJs)
		.transform(reactify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(paths.out));
});

gulp.task('watch', function() {
	gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['watch', 'pages', 'js']);
