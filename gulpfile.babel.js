import gulp                 from 'gulp';
import babel                from 'gulp-babel';
import eslint               from 'gulp-eslint';
import del                  from 'del';
import webpack              from 'webpack';
import webpackStream        from 'webpack-stream';
import WebpackDevServer     from 'webpack-dev-server';
import webpackConfig        from './webpack.config.babel';


const paths = {
    libDir: 'lib',
    distDir: 'dist',

    gulpFile: 'gulpfile.babel.js',
    webpackConfigFile: 'webpack.config.babel.js',

    allJsSrc: 'src/**/*.js',
    serverJsScr: 'src/server/**/*.js',
    sharedJsScr: 'src/shared/**/*.js',

    clientEntryPoint: 'src/client/app.jsx',
};

const port = 6060;


gulp.task('clean', () => {
    return del(paths.libDir);
});

gulp.task('build', ['clean'], () => {
    return gulp.src(paths.allJsSrc)
        .pipe(babel())
        .pipe(gulp.dest(paths.libDir));
});

gulp.task('webpack', () => {
    gulp.src(paths.allJsSrc)
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest(paths.distDir));
});

gulp.task('webpack-dev-server', () => {
    new WebpackDevServer(webpack(webpackConfig), {
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        historyApiFallback: true,
    }).listen(port, 'localhost', err => {
        if (err) console.log(err);
        console.log(`Webpack dev server is running on port ${port}`);
    });
});

gulp.task('eslint', () => {
    return gulp.src([
        paths.gulpFile,
        paths.webpackConfigFile,
        paths.allJsSrc
    ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('watch', () => {
    gulp.watch(paths.allJsSrc, ['webpack']);
});


gulp.task('default', ['webpack-dev-server']);
