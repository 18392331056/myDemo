

// 引入模块
const gulp = require("gulp");
// const minifyCSS=require("gulp-minify-css");
// const concat = require("gulp-concat");
// const uglify = require("gulp-uglify");
// const rename = require("gulp-rename");

// 2.写复制文件的任务

// 监听css任务(copy-html是我自己起的任务名)
gulp.task("copy-html",async ()=>{
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\zstang"));

})
gulp.task("copy-css",async ()=>{
	gulp.src("./css/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\zstang\\css"));

});

gulp.task("copy-img",async ()=>{
	gulp.src("./img/*.{jpg,png,jif}").pipe(gulp.dest("D:\\phpStudy\\WWW\\zstang\\img"));

});


gulp.task("copy-js",async ()=>{
	gulp.src("./js/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\zstang\\js"));

});

gulp.task("copy-scss",async ()=>{
	gulp.src("./scss/*.scss").pipe(gulp.dest("D:\\phpStudy\\WWW\\zstang\\css"));

});
gulp.task("copy-font",async ()=>{
	gulp.src("./font/*^iconfont.").pipe(gulp.dest("D:\\phpStudy\\WWW\\zstang\\font"));

});
gulp.task("copy-php",async ()=>{
	gulp.src("./php/*.php").pipe(gulp.dest("D:\\phpStudy\\WWW\\zstang\\php"));

});

// gulp.task("sass",function(){
// 	gulp.src("*.scss")
// 	.pipe(sass())
// 	.pipe(minfyCss())
// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\zstang\\css"));		
	
// })

// 合并文件()
// gulp.task("concat-js",async ()=>{
// 	gulp.src(["js/index.js","js/goodslist.js"])
// 	.pipe(concat("common.js"))//合并到这个文件中
// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\zstang\\js"));
// });  //gulp为管道 dest为目的地
//合并并且压缩文件，重命名
// gulp.task("concat-uglify-rename-js",async ()=>{
// 	gulp.src(["js/index.js","js/goodslist.js"])
// 	.pipe(concat("common.js"))
// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\zstang\\js"))
// 	.pipe(uglify())//压缩
// 	.pipe(rename("common.min.js"))//重命名
// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\zstang\\js"));
// });



// 自动监听任务（watchall任务名。在命令窗口直接输任务名监听即可）
gulp.task("watchall",async ()=>{
	gulp.watch("*.html",gulp.series("copy-html"));
	gulp.watch("./css/*.css",gulp.series("copy-css"));
	gulp.watch("./scss/*.scss",gulp.series("copy-scss"));

	gulp.watch("./img/*.{jpg,png,gif,temp}",gulp.series("copy-img"));
	gulp.watch("./js/*.js",gulp.series("copy-js"));
	gulp.watch("./php/*.php",gulp.series("copy-php"));
	gulp.watch("./font/*.font",gulp.series("copy-font"));
	 
});
// gulp.watch(["js/index.js","js/goodslist.js"],gulp.series("concat-js"));