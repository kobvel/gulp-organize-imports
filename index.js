var through = require("through2"),
	gutil = require("gulp-util");

module.exports = function (options) {
	"use strict";

	// if necessary check for required param(s), e.g. options hash, etc.
	// if (!param) {
	// 	throw new gutil.PluginError("gulp-organize-imports", "No param supplied");
	// }

	// see "Writing a plugin"
	// https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
	function organizeImports(file, enc, callback) {
		/*jshint validthis:true*/

		// Do nothing if no contents
		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		if (file.isStream()) {
			// http://nodejs.org/api/stream.html
			// http://nodejs.org/api/child_process.html
			// https://github.com/dominictarr/event-stream

			// accepting streams is optional
			this.emit("error",
				new gutil.PluginError("gulp-organize-imports", "Stream content is not supported"));
			return callback();
		}

		// check if file.contents is a `Buffer`
		if (file.isBuffer()) {
			var regExps = [
				"^import ['\"]{1}.*",
				"import ['\*]{1}.*",
				".*angular.*",
				"^.*"
			];
			var lines = String(file.contents).split('\n').filter(el => el !== '');
			var result = [];
			var imports = [];

			regExps.forEach(el => {
				if (result.length > 0) {
					result.push('');
				}

				var regEx = new RegExp(el);
				var importFrom = new RegExp("[\"'](.*?)[\"']");
				var importWhat = new RegExp("[{}](.*?)[}]");

				imports = lines
					.filter(el => el.match(regEx))
					.sort((x, y) => {
						if (!x.match(importWhat)) {
							console.log(x);
							return 1;
						}
						return x.match(importWhat)[1] > y.match(importWhat)[1];
					});
				lines = lines.filter(el => !el.match(regEx));
				result = result.concat(imports)
			});

			console.log(result);
			// console.log(lines);
			// manipulate buffer in some way
			// http://nodejs.org/api/buffer.html
			file.contents = new Buffer(String(file.contents));

			this.push(file);

		}
		return callback();
	}

	return through.obj(organizeImports);
};
