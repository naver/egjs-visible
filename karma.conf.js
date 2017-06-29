module.exports = function(config) {
	var karmaConfig = {
		frameworks: ["mocha", "chai", "sinon"],

		files: [
			"./test/unit/*.tmpl.html",
			"./node_modules/phantomjs-polyfill/bind-polyfill.js",
			"./node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js",
			"./node_modules/iscroll/build/iscroll.js",
			"./test/unit/*.spec.js"
		],

		preprocessors: {
			"./test/unit/*.tmpl.html": ["html2js"],
			"./test/unit/*.spec.js": ["webpack"]
		},

		webpack: {
			devtool: "inline-source-map",
			module: {
				rules: [
					{
						test: /\.js$/,
						exclude: /node_modules/,
						loader: "babel-loader",
						options: {
							presets: ["es2015"],
							plugins: ["add-module-exports"]
						}
					}
				]
			}
		},
		webpackMiddleware: {
			noInfo: true
		},



		reporters: ["mocha"],

		browsers: ["PhantomJS_custom"],
		customLaunchers: {
			"PhantomJS_custom": {
				base: "PhantomJS",
				options: {
					viewportSize: {
						width: 1024,
						height: 960
					}
				}
			}
		},
		client: {
			useIframe: false,
			runInParent: true
		}
	};

	if(config.chrome){
		karmaConfig.browsers.push("Chrome");
	}

	if(config.coverage) {
		karmaConfig.preprocessors["./test/**/*.spec.js"].push("sourcemap");
		karmaConfig.reporters.push("coverage-istanbul");
		karmaConfig.coverageIstanbulReporter = {
			reports: [ "text-summary" , "html"],
			dir: "./coverage"
		};
		karmaConfig.webpack.module.rules.unshift({
			test: /\.js$/,
			exclude: /(node_modules|test)/,
			loader: "istanbul-instrumenter-loader"
		});
		karmaConfig.singleRun = true;
	}

	config.set(karmaConfig);
};
