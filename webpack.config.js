var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var src_dir = path.resolve(__dirname, 'src');
var out_dir = path.resolve(__dirname, 'build');

var config = [
	{
		name: 'client',
		entry: './src',
		output: {
			path: out_dir,
			filename: 'app.js'
		},
		module:{
			loaders: [{
				include: src_dir,
				exclude: [nodeModulesPath],
				loader: 'babel',
	            query: {
	                presets: ['es2015']
	            }
			}]
		},
		resolve: {
			extensions: ['.json','.jsx']
		},
		node: {
        	fs: "empty"
   		}
	},
	{
		name: 'server',
		entry: [
			'./src/server',
			'./src/util'
		],
		output: {
			path: out_dir,
			filename: 'server.js'
		},
		module:{
			loaders: [{
				include: src_dir,
				exclude: [nodeModulesPath],
				loader: 'babel',
	            query: {
	                presets: ['es2015']
	            }
			}]
		},
		resolve: {
			extensions: ['.json','.jsx']
		},
		node: {
        	fs: "empty"
   		}
	}

];

module.exports = config;