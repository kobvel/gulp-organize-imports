(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-organize-imports
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> organize-imports plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-organize-imports` as a development dependency:

```shell
npm install --save-dev gulp-organize-imports
```

Then, add it to your `gulpfile.js`:

```javascript
var organize-imports = require("gulp-organize-imports");

gulp.src("./src/*.ext")
	.pipe(organize-imports({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### organize-imports(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-organize-imports
[npm-image]: https://badge.fury.io/js/gulp-organize-imports.png

[travis-url]: http://travis-ci.org/kobvel/gulp-organize-imports
[travis-image]: https://secure.travis-ci.org/kobvel/gulp-organize-imports.png?branch=master

[coveralls-url]: https://coveralls.io/r/kobvel/gulp-organize-imports
[coveralls-image]: https://coveralls.io/repos/kobvel/gulp-organize-imports/badge.png

[depstat-url]: https://david-dm.org/kobvel/gulp-organize-imports
[depstat-image]: https://david-dm.org/kobvel/gulp-organize-imports.png
