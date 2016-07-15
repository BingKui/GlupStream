var gulp = require('gulp');
var _tool = require('gulp-load-plugins')();
//var autoprefixer = require('gulp-autoprefixer');
//添加私有前缀
gulp.task('testAutoFx', function() {
	gulp.src('src/css/*.css')
		.pipe(_tool.autoprefixer({
			browsers: ['> 5%'],
			cascade: true, //是否美化属性值 默认：true 
			remove: true //是否去掉不必要的前缀 默认：true 
		}))
		.pipe(gulp.dest('dist/css'));
});
//js代码检查
gulp.task('jshint', function() {
	gulp.src('src/js/*.js')
		.pipe(_tool.jshint())
		.pipe(_tool.jshint.reporter());
});
//css代码检查
gulp.task('csslint', function() {
	gulp.src('src/css/*.css')
		.pipe(_tool.csslint())
		.pipe(_tool.csslint.reporter());
});
//js合并 依赖于js代码检查
gulp.task('js', ['jshint'], function() {
	return gulp.src('src/js/*.js')
		.pipe(_tool.concat('all.js'))
		.pipe(gulp.dest('dist/'));
});

//合并css依赖于css检查
gulp.task('css', ['csslint'], function() {
	return gulp.src('src/**/*.css')
		.pipe(_tool.concatCss("all.css"))
		.pipe(gulp.dest('dist/'));
});

gulp.task('default', ['csslint', 'jshint', 'css', 'js'], function() {
	//文件监听，编译扫描代码质量
	gulp.watch('js/**/*.css', function() {
		gulp.run('csslint');
	});
	gulp.watch('js/**/*.js', function() {
		gulp.run('jshint');
	});
});