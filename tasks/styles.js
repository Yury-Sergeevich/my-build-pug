import gulp from 'gulp';
import sass from 'gulp-dart-sass';
import { server } from './server.js';

export const styles = () => {
   return gulp.src('./src/styles/styles.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build/styles'))
      .pipe(server.stream());
}
