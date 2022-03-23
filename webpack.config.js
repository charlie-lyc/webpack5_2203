const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// Default

// module.exports = {
//     mode: 'development',
//     entry: path.resolve(__dirname, 'src/index.js'),
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'main.js',
//     },
// }

//////////////////////////////////////////////////////
// module.exports = {
//     mode: 'development',
//     entry: path.resolve(__dirname, 'src/index.js'),
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js',
//     },
// }

//////////////////////////////////////////////////////
// module.exports = {
//     mode: 'development',
//     entry: {
//         // Multiple Entries
//         bundle: path.resolve(__dirname, 'src/index.js'),
//     },
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: '[name].js',
//     },
// }

//////////////////////////////////////////////////////
// module.exports = {
//     mode: 'development',
//     entry: {
//         // Multiple Entries
//         bundle: path.resolve(__dirname, 'src/index.js'),
//     },
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: '[name].js',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.scss$/,
//                 use: [ 'style-loader', 'css-loader', 'sass-loader' ]
//             }
//         ]
//     },
// }

//////////////////////////////////////////////////////
module.exports = {
    mode: 'development',
    entry: {
        // Multiple Entries
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: '[name].js',
        filename: '[name][contenthash].js',
        clean: true, // Clean The Before Bundle, Keep Only One Bundle
        assetModuleFilename: '[name][ext]',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack5 App',
            filename: 'index.html', 
            template: 'src/template.html'
        }),
        new BundleAnalyzerPlugin(),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    devtool: 'source-map', // For Debug

}