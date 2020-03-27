const gulp = require('gulp');
//const htmlmin=require('gulp-htmlmin')
const fileinclude = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
//
const csso = require('gulp-csso')
const less = require('gulp-less')

//
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

//
gulp.task('first', () => {
    console.log('first')
    gulp.src('src/css/base.css')
        .pipe(gulp.dest('dist/css'));
})
//
// gulp.task('htmlmin',()=>{
//     gulp.src('./src/*.html')
//     .pipe(htmlmin({collapseWhitespace:true}))
//     .pipe(gulp.dest('dist'));
// })
//
gulp.task('htmlmin', (done) => {
    gulp.src('./src/*.html')
        .pipe(fileinclude())
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'));
    done();
})
gulp.task('cssmin', (done) => {
    // gulp.src('./src/css/*.less')
    //选择css和less文件
    gulp.src(['./src/css/*.less', './src/css/*.css'])
        //先转换再压缩
        .pipe(less())
        .pipe(csso())
        .pipe(gulp.dest('dist/css'))
    done()
})
gulp.task('jsmin', (done) => {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            //由它判断代码的运行环境，转换为环境所支持的代码
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
    done();

})
gulp.task('copy', (done) => {
    gulp.src('./src/images/*')
        .pipe(gulp.dest('dist/images'));
    gulp.src('./src/lib/*')
        .pipe(gulp.dest('dist/lib'))
    done();
})
//构建任务
//gulp 3
//gulp.task('default',['htmlmin','cssmin','jsmin','copy']);
//gulp 4
gulp.task('default', gulp.series('htmlmin', 'cssmin', 'jsmin', 'copy', function (done) {
    // Do something after a, b, and c are finished.
    done();
}));