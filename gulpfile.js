'use strict';

var gulp        = require('gulp'),
    browserify  = require('gulp-browserify'),
    source      = require('vinyl-source-stream'),
    del         = require('del')
    ;

// Basic usage
gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('./js/hello.js')
        .pipe(browserify({
            insertGlobals : true,
            require: ["./add.js", "./hello.js"]
        }))
        .pipe(gulp.dest('./build/js'))
});

gulp.task('clean', function (done) {
    del(['.tmp'], done.bind(this));
});


