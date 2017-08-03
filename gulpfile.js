const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('default', function () {
  gulp.watch('./styles/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
  return gulp.src('./styles/**/*.scss')
    .pipe(sass())
    .pipe(concat('bundle.css')) // this is what was missing
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
    }))
    .pipe(gulp.dest('./dist/'));
}); 


// gulp.task('default', () =>
//     gulp.src('src/app.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('dist'))
// );
