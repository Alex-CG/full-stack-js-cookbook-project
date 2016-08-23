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
	},
	{
		name: 'server',
		entry: [
			src_dir+'/server/category.js',
			src_dir+'/server/cookbook.js'
		],
		output: {
			path: out_dir,
			filename: 'server.js'
		},
		module:{
			loaders: [{
				test: /\.js$/,
				include: src_dir,
				exclude: [nodeModulesPath],
				loader: 'babel-loader',
	            query: {
	                presets: ['es2015']
	            }
			}]
		},
		resolve: {
			extensions: ['','.js']
		},
		node: {
        	fs: "empty",
        	net: "empty",
        	tls: "empty",
        	module: "empty"
   		}
	}
];

module.exports = config;