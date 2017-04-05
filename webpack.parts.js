exports.development = function(options) {
	return {
		devServer: {
			publicPath: "/dist/"
		},
		devtool: "inline-source-map"
	}
};

exports.production = function(options) {
	return {
		entry: {
			// it will merged config.entry
			"visible.min": "./src/index.js"
		},
		devtool: "cheap-module-source-map"
	}
};

exports.productionPackaged = function(options) {
	return {
		entry: {
			"visible.pkgd": "./src/index.js",
			"visible.pkgd.min": "./src/index.js"
		},
		externals: {
			// it will overwrite config.externals
		}
	}
};
