const path = require('path');
const UglifyJs = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './js/app.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    // {loader: 'style-loader'},
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'}
                ]
            }
        ]
    },

    plugins: [
        // new UglifyJs({
        //     test: /\.js$/,
        //     exclude: /node_modules/
        // })
        new MiniCssExtractPlugin({filename: 'style.css'}),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            title: 'Home'
        }),
        new HtmlWebpackPlugin({
            filename: 'register.html',
            template: './register.html',
            title: 'Signup'
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './login.html',
            title: 'Login',
            // chunksSortMode: ''
        })
    ],

    context: path.resolve(__dirname, 'src'),

    output: {
        filename: 'bundle-[name].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: 'vendors.js' 
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    mode: 'development',
};