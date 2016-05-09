var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var ts = require('gulp-typescript');
gulp.task('default', function() {
  console.log('defult');
});
gulp.task('deleteJs',function(){
	console.log('we will delete all js fill');
	gulp.src('*.js')
	.pipe(vinylPaths(del));
});
gulp.task('compileTs', function () {
	console.log("compile ts in src to js");
	gulp.src('src/*.ts')
		.pipe(ts({
			noImplicitAny:false,
		}))
		.pipe(gulp.dest('js'));
});