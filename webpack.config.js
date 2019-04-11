const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'build.js'
    },

    module:{
        rules:[
           {
                test: /\.(js|jsx)$/,
                exclude: path.resolve(__dirname + '/node_modules/'),
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }, 
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(eot|ttf|wav|mp3)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins:[
       new HtmlWebPackPlugin(
        {
            template: path.join(__dirname, '/src/index.html'),
            // filename: "./index.html"
        }
       )
   ]
}