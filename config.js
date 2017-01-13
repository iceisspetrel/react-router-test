var webpack = require('webpack'),
    path    = require('path');
var env = process.env.NODE_ENV;
var __DEV__ = JSON.stringify(env) != JSON.stringify('production');

var webpackConfig = {
    entry : {
        entry : './app/entry.js'
    },
    output : {
        path : path.resolve(__dirname, 'bundle'),
        filename : '[name].js'
    },
    module : {
        loaders : [
            {
                test : /\.(js|jsx)$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                query : {
                    presets : ['es2015', 'react']
                }
            }
        ]
    },
    plugins : [
        new webpack.DefinePlugin({
            'process.env' : {
                'NODE_ENV' : JSON.stringify(env)
            }
        }),
        new webpack.ProvidePlugin({
            'React' : 'react',
            'ReactDOM' : 'react-dom'
        })
    ]
};

if(!__DEV__){
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
}

module.exports = webpackConfig;
