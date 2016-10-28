const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const exec = require('child_process').exec;

const paths = {
	distDir: 'dist',
	allJsSrc: 'src/**/*.js',
};


gulp.task('clean', () => {
	return del(paths.distDir);
});

gulp.task('build', ['clean'], () => {
	return gulp.src(paths.allJsSrc)
		.pipe(babel())
		.pipe(gulp.dest(paths.distDir));
});

gulp.task('main', ['build'], (next) => {
	exec(`node ${paths.distDir}`, (err, stdout) => {
		console.log(stdout);

		return next(err);
	})
});

gulp.task('watch', () => {
	gulp.watch(paths.allJsSrc, ['main']);
});

gulp.task('default', ['watch', 'main']);

