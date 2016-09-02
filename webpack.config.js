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
			src_dir+'/components/menu-item/index.jsx',
			src_dir+'/components/menu-items/index.jsx',
			src_dir+'/components/navigation/index.jsx',
			src_dir+'/components/recipe-form/index.jsx',
			src_dir+'/components/recipe-item/index.jsx',
			src_dir+'/components/recipe-preview/index.jsx',
			src_dir+'/components/recipes-board/index.jsx'
		],
		output: {
			path: out_dir,
			filename: 'app.js'
		},
		module:{
			loaders: [
				{
					test: /\.jsx$/,
					include: src_dir,
					exclude: [nodeModulesPath],
					loader: 'babel-loader',
		            query: {
		                presets: ['es2015']
		            }
				},
				{ 
        			test: /\.css$/, 
        			loader: "style-loader!css-loader" 
      			},
			    { 
			        test: /\.png$/, 
			        loader: "url-loader?limit=100000" 
			    },
			    { 
			        test: /\.jpg$/, 
			        loader: "file-loader" 
			    },
			    {
			        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
			        loader: 'url?limit=10000&mimetype=application/font-woff'
			    },
			    {
			        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
			        loader: 'url?limit=10000&mimetype=application/octet-stream'
			    },
			    {
			        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
			        loader: 'file'
			    },
			    {
			        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
			        loader: 'url?limit=10000&mimetype=image/svg+xml'
			    }
			]
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