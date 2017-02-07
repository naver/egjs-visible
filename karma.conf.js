module.exports = function(config) {
	config.set({
		frameworks: ["qunit"],
		files: [
			// vendor files
			"node_modules/jquery/dist/jquery.js",
			"node_modules/iscroll/build/iscroll.js",
			// src files
			"dist/<%= componentName %>.js",
			// test files
			"test/**/*.js"
		],
		browsers: ["PhantomJS"],
		singleRun: true
	});
};
