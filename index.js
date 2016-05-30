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
				"^import [',\"]{1}.*"
			];
			var lines = String(file.contents).split('\n').filter(el => el !== '');

			var pureIpmorts = lines.filter(el => el.match(new RegExp(regExps[0])));
			console.log(pureIpmorts);
			// manipulate buffer in some way
			// http://nodejs.org/api/buffer.html
			file.contents = new Buffer(String(file.contents));

			this.push(file);

		}
		return callback();
	}

	return through.obj(organizeImports);
};
