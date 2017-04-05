module.exports = function(config) {
	var karmaConfig = {
		frameworks: ['mocha', 'chai', 'sinon'],

		files: [
			"./test/unit/*.tmpl.html",
			'./node_modules/phantomjs-polyfill/bind-polyfill.js',
			'./node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
			'./node_modules/iscroll/build/iscroll.js',
			'./test/unit/*.spec.js'
		],

		// karma을 실행할 때, 아래 패턴은 위에서 설정한 webpack설정.
		preprocessors: {
			"./test/unit/*.tmpl.html": ["html2js"],
			'./test/unit/*.spec.js': ['webpack']
		},

		// webpack 설정
		webpack: {
			devtool: 'inline-source-map',
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
		// in-memory로 하고 싶을 때 webpack-dev-middleware을 쓰는데 해당 옵션 설정
		webpackMiddleware: {
			// 정보들 안보이게 함
			noInfo: true
		},



		// 리포트 타입(mocha)
		reporters: ['mocha'],

		// 브라우저 설정
		browsers: ["PhantomJS_custom"],
		customLaunchers: {
			'PhantomJS_custom': {
				base: 'PhantomJS',
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

	// chrome을 설정한 경우
	if(config.chrome){
		karmaConfig.browsers.push("Chrome");
	}

	// coverage을 설정한 경우
	if(config.coverage) {
		karmaConfig.preprocessors['./test/**/*.spec.js'].push('sourcemap');
		karmaConfig.reporters.push('coverage-istanbul');
		// text랑 html로 리포트
		karmaConfig.coverageIstanbulReporter = {
			reports: [ 'text-summary' , 'html'],
			dir: './coverage'
		};
		// coverage의 순서을 위로
		karmaConfig.webpack.module.rules.unshift({
			test: /\.js$/,
			exclude: /(node_modules|test)/,
			loader: 'istanbul-instrumenter-loader'
		});
		karmaConfig.singleRun = true;
	}

	config.set(karmaConfig);
};
