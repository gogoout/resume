var gulp = require('gulp'),
	plugin = require('gulp-load-plugins')(),
	del = require('del'),
	importStyle = require('./assets/gulp/importStyle'),
	gutil = require('gulp-util');

var paths = {
	js   : 'js/**',
	less : ['style/index.less',
	        'style/global/*.less',
	        'style/base/*.less',
	        'style/layout/*.less',
	        'style/module/*.less',
	        'style/theme/*.less'],
	bower: ['lib/**/*',
	        'bower_components/*/*',
	        'bower_components/*/dist/**/*',
	        'bower_components/*/build/*',
	        'bower_components/*/release/*',
	        'bower_components/*/?(css|fonts)/*',
	        '!bower_components/*/modules/**',
	        '!bower_components/*/themes/**',
	        '!bower_components/*/src/**',
	        '!bower_components/**/?(Gruntfile|gulpfile)'],
	exts : ['js',
	        'css',
	        'eot',
	        'svg',
	        'ttf',
	        'woff'
	],
	dist : {
		path: 'www',
		js  : 'www/js',
		css : 'www/css',
		lib : 'www/lib'
	}
};

var names = {
	destApp   : 'app.all',
	destAppMin: 'app.all.min'
};

function getFileArray(arr, extName, prefixOfExtName) {
	return arr.map(function (filePath) {
		return filePath + (prefixOfExtName ? '.' + prefixOfExtName : '') + (extName ? '.' + extName : '');
	});
}


gulp.task('clean', function () {
	del.sync([paths.dist.js]);
	del.sync([paths.dist.css]);
	del.sync([paths.dist.lib]);
});

gulp.task('lib', function () {
	var lib = getFileArray(paths.bower, ('@(' + paths.exts.join('|') + ')'));
	return gulp.src(lib).
		pipe(gulp.dest(paths.dist.lib));
});

gulp.task('js', function () {
	return gulp.src(paths.js).
		pipe(plugin.plumber()).
		/*jshint camelcase:false*/
		pipe(plugin.ngAnnotate({add: true, single_quotes: true})).
		/*jshint camelcase:true*/
		pipe(plugin.removeUseStrict({force: true})).
		pipe(plugin.concat(names.destApp + '.js')).
		pipe(plugin.wrapper({
			                    header: '(function(){\'use strict\';\n',
			                    footer: '\n}());'
		                    })).
		pipe(gulp.dest(paths.dist.js)).
		pipe(plugin.uglify()).
		pipe(plugin.rename(names.destAppMin + '.js')).
		pipe(gulp.dest(paths.dist.js));
});

gulp.task('style', function () {
	var stream = gulp.src(paths.less, {base: 'style'}).
		pipe(plugin.plumber(
			     {
				     errorHandler: function (error) {
					     gutil.log(
						     error.toString()
					     );
					     stream.end();
				     }
			     })).
		// 自定义动作,将所有依赖项动态写入index.less
		pipe(importStyle({exclude: /^global/})).
		pipe(plugin.less()).
		pipe(plugin.autoprefixer()).
		pipe(plugin.rename(names.destApp + '.css')).
		pipe(gulp.dest(paths.dist.css)).
		pipe(plugin.minifyCss()).
		pipe(plugin.rename(names.destAppMin + '.css')).
		pipe(gulp.dest(paths.dist.css));
	return stream;
});

gulp.task('watchStyle', function () {
	gulp.watch(paths.less, ['style']);
});

gulp.task('watchJs', function () {
	gulp.watch(paths.js, ['js']);
});

gulp.task('jshint', function () {
	return gulp.src(paths.js).
		pipe(plugin.jshint()).
		pipe(plugin.jshint.reporter('jshint-stylish'));
});

gulp.task('watch', ['watchStyle', 'watchJs']);
gulp.task('build', ['js', 'style']);
gulp.task('release', ['clean', 'lib', 'jshint', 'build']);

gulp.task('default', ['build']);