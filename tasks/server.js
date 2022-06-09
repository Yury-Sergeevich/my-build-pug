import browserSync from 'browser-sync';

export const server = browserSync.create();

export const reload = done => {
    server.reload();
    done();
}

export const serve = done => {
    server.init({
        server: {
            baseDir: './build',
        },
        open: "local"
    });
    done();
}