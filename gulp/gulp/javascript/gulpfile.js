const gulp = require('gulp')
const concat = require('gulp-concat') // Modulo usado para concatenar varios arquivos em um unico
const uglify = require('gulp-uglify') // Compactar o js removendo espaços em branco
const babel = require('gulp-babel') // Compila o codigo de forma que os novos recursos do EC6 sejam suportados por todos os browsers

gulp.task('default', () => {
    return gulp.src('src/**/*js')
        .pipe(babel({
            // minified: true, // Funciona semelhante ao uglify
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify()) // Uglify não entende recursos novos do EC6, então necessita do uso do Babel
        .on('error', function (err) { console.log(err) }) // Caso ocorra erro
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))

})