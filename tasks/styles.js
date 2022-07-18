import gulp from 'gulp';
import sass from 'gulp-dart-sass';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import { server } from './server.js';





export const styles = () => {
   return gulp.src('./src/styles/styles.scss', { sourcemaps: true })
      .pipe(plumber())
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([
         autoprefixer(),
         csso()
      ]))
      .pipe(rename({
         suffix: '.min'
      }))
      .pipe(gulp.dest('./build/styles', { sourcemaps: '.' }))
      .pipe(server.stream());
}
