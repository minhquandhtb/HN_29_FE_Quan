"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task("sass", function () {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

var gulp = require("gulp");
var pug = require("gulp-pug");

// run this task by typing in gulp pug in CLI
gulp.task("pug", function () {
  return gulp
    .src("pug/*.pug")
    .pipe(
      pug({
        pretty: true,
      })
    ) // pipe to pug plugin
    .pipe(gulp.dest("build")); // tell gulp our output folder
});

gulp.task("watch", function () {
  gulp.watch("sass/**/*.scss", gulp.series("sass"));
  gulp.watch("pug/**/*.pug", gulp.series("pug"));
});
