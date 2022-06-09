import gulp from 'gulp';
import pug from 'gulp-pug';

export const pages = () => {  //называем таск
    return gulp.src('./src/index.pug') //обращаемся к галп и указываем путь к файлу с которым будем работать
      .pipe(pug({ pretty: true }))
      .pipe(gulp.dest('./build'));
}
