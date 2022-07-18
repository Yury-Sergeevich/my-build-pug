/**
 * создать сборку
 * 1. шаблонизация html
 * 2. стили
 * 3. gh-pages
 * 4. autoprefixer
 * 
*/
import gulp from 'gulp';
import { pages } from './tasks/pages.js'; //импортириуем  именованную функцию из файла page.js
import { styles } from './tasks/styles.js';
import { serve, reload } from './tasks/server.js'
import { clean } from './tasks/clean.js';



function watchFiles() {
   gulp.watch('./src/*.pug', gulp.series(pages, reload));
   gulp.watch('./src/styles/**/*.scss', gulp.series(styles));
}

// Галп-задачи
export const build = gulp.series(pages, styles);
export default gulp.series(build, serve, watchFiles); 
