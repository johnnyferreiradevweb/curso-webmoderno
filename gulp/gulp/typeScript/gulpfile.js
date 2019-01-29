const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', () => {
    return tsProject.src()
        .pipe(tsProject()) // Compila o codigo de TypeScript para JavaScript
        .pipe(gulp.dest('build'))
})