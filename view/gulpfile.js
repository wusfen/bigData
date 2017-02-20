// $ gulp 
var gulp = require('gulp');

gulp.task('default'); // gulp 命令行必须有 default 才执行，虽然这里什么也没干。。
// $ node thisfile
// 延时执行，任务在后面定义，并且 gulp 命令行和 node 直接执行都支持
setTimeout(function() {
    // ！！！执行任务
    // gulp.run('browser-sync');
    gulp.run('watch');
    // gulp.run('less');
});


// 浏览器实时刷新
// browser-sync start --server --files "**/*.css, **/*.html"
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
gulp.task('browser-sync', function() {
    browserSync.init({
        // open: 'ui',
        files: ['**/*.less', '**/*.css', '**/*.html'],
        server: {
            baseDir: './'
        },
    });
    // gulp.watch(['**/*.js'], function() {
    //     console.log('js changed..');
    //     browserSync.reload();
    // })
});


// watch
gulp.task('watch', function() {
    gulp.watch('**/*.less', ['less']);
})


// css
gulp.task('css', function() {
    var autoprefixer = require('gulp-autoprefixer');

    gulp.src('**/*.css')
        .pipe(autoprefixer("last 5 versions", "ios >1% ", "android > 1%"))
        .pipe(gulp.dest('dest'));

});
// less
gulp.task('less', function() {
    var less = require('gulp-less');
    var autoprefixer = require('gulp-autoprefixer');
    var mcss = require('gulp-minify-css');
    var sourcemaps = require('gulp-sourcemaps');
    var notify = require('gulp-notify');

    gulp.src('css/app.less')
        // .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer("last 5 versions", "ios >.1% ", "android > .1%"))
        .pipe(mcss())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('css/'))
        .pipe(reload({stream:true}));
        // .pipe(notify({ message: 'less 完成' }))
    console.log('less done', new Date().toLocaleString());
});


// js
gulp.task('js', function() {
    var uglify = require('gulp-uglify');

    gulp.src('t.js')
        .pipe(uglify({
            preserveComments: 'license'
        }))
        .pipe(gulp.dest('dest'))

})


// img
gulp.task('img', function() {
    var img = require('gulp-imagemin');

    gulp.src('s3.png')
        .pipe(img())
        .pipe(gulp.dest('dest'))
})
