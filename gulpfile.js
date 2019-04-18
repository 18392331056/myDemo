let gulp = require("gulp");
let sass = require("gulp-sass");
//copy scss
gulp.task("copy-sass", async () => {
    gulp.src("sass/**/*")
        .pipe(sass())
        .pipe(gulp.dest("E:\\第三阶段\\三阶段公共\\作品\\allitem\\css"));
});

//自动监听
gulp.task("watch-self", async () => {
    gulp.watch("sass/**/*", gulp.series("copy-sass"));
})