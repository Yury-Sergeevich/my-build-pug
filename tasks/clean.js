import gulp from 'gulp';
import del from 'del';

const clean = () => {
   return del('build');
};

export {clean};