var webpack = require("webpack");
var path = require("path");

module.exports = {
	target: "web",
	entry: {
		"visible": "./src/index.js",
		"visible.min": "./src/index.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		library: ["eg", "Visible"],
		libraryTarget: "umd"
	},
	externals: {
		"@egjs/component" : {
			commonjs: "@egjs/component",
			commonjs2: "@egjs/component",
			amd: "@egjs/component",
			root: ["eg", "Component"]
		}
	},
	devServer: {
		publicPath: "/dist/"
	},
	devtool: "source-map",
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			options: {
		  		presets: ["es2015"]
			}
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			include: /\.min\.js$/,
			minimize: true
		})
	]
};
