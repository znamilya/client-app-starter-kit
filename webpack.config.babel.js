import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';


const config = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:6060',
        'webpack/hot/only-dev-server',
        './src/client/index.jsx',
    ],
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
                loader: 'babel-loader',
                exclude: ['node_modules'],
            }
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/client/index.tpl.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
}


export default config;