var webpack = require('webpack');
var path = require('path');

var src_dir = path.resolve(__dirname, 'src');
var out_dir = path.resolve(__dirname, 'build');

var config = {
	entry: src_dir + '/index.jsx',
	output: {
		path: out_dir,
		filename: 'app.js'
	},
	module:{
		loaders: [{
			include: src_dir,
			exclude: /node_modules/,
			loader: 'babel'
		}]
	}
};

module.exports = config;