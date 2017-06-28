var webpack = require("webpack");
var pkg = require("./package.json");
var merge = require("webpack-merge");
var UglifyJSPlugin = require("uglifyjs-webpack-plugin");
var StringReplacePlugin = require("string-replace-webpack-plugin");

var path = require("path");
var parts = require("./webpack.parts");

var config = {
	entry: {
		"visible": "./src/index.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		library: ["eg", "Visible"],
		libraryTarget: "umd",
		umdNamedDefine: true
	},
	externals: {
		"@egjs/component" : {
			commonjs: "@egjs/component",
			commonjs2: "@egjs/component",
			amd: "@egjs/component",
			root: ["eg", "Component"]
		}
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}, {
			test: /(\.js)$/,
			loader: StringReplacePlugin.replace({
				replacements: [{
					pattern: /#__VERSION__#/ig,
					replacement: function(match, p1, offset, string) {
						return pkg.version;
					}
				}]
			})
		}]
	},
	plugins: [
		new UglifyJSPlugin({
			include: /\.min\.js$/,
			beautify: false,
			mangle: {
				screw_ie8: true,
				keep_fnames: true
			},
			compress: {
				screw_ie8: true,
				warnings: false
			},
			output: {
				screw_ie8: false
			},
			comments: false,
			sourceMap: true
		})
	]
};

module.exports = function(env) {
	env = env || "development";

	if (env === "development") {
		return merge([
			config,
			parts.development()
		]);
	} else if (env === "production") {
		return merge([
			config,
			parts.production()
		]);
	} else if (env === "production-packaged") {
		var strategy = merge.strategy({
			entry: "replace",
			externals: "replace"
		});

		return strategy([
			config,
			parts.production(),
			parts.productionPackaged()
		]);
	}
};
