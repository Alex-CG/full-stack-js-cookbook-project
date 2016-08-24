var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var src_dir = path.resolve(__dirname, 'src');
var out_dir = path.resolve(__dirname, 'build');

var config = [
	{
		name: 'client',
		entry: [
			src_dir+'/index.jsx',
			src_dir+'/components/cookbookapp/index.jsx',
			src_dir+'/components/navigation/index.jsx',
			src_dir+'/components/menu-items/index.jsx',
			src_dir+'/components/menu-item/index.jsx',
			src_dir+'/components/recipe-preview/index.jsx'
		],
		output: {
			path: out_dir,
			filename: 'app.js'
		},
		module:{
			loaders: [{
				test: /\.jsx$/,
				include: src_dir,
				exclude: [nodeModulesPath],
				loader: 'babel-loader',
	            query: {
	                presets: ['es2015']
	            }
			}]
		},
		resolve: {
			extensions: ['','.js','.jsx']
		},
		node: {
        	fs: "empty"
   		}
	}
];

module.exports = config;