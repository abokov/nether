﻿/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp");

gulp.task('default', function () {
   // place code for your default task here
});

gulp.task("npmtolib", () => {
   gulp.src([
      "systemjs/dist/*.js",
      "reflect-metadata/*.js",
      "rxjs/**",
      "zone.js/dist/**",
      "@angular/**",
      "core-js/client/*.min.js",
      "ng2-cookies/**"
   ], {
      cwd: "node_modules/**"
   })
   .pipe(gulp.dest("./wwwroot/lib"));
});