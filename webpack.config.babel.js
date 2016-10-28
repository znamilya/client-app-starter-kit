import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';


const config = {
    entry: './src/client/app.jsx',
    output: {
        filename: 'bundle.[hash:6].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loaders: ['babel-loader'],
                exclude: ['node_modules'],
            }
        ],
    },
    resolve: {
        extendions: ['', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/client/index.tpl.html',
        })
    ],
}


export default config;