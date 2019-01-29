const gulp = require('gulp')
const util = require('gulp-util') // Checa uma variavel de ambiente
const sequence = require('run-sequence') // Evita que as tasks sejam carregadas em paralelo (Carregar em paralelo pode gerar problemas)

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
    if(util.env.production) {
        sequence('deps', 'app')
        // gulp.start('deps', 'app')
    } else {
        sequence('deps', 'app', 'servidor')
        // gulp.start('deps', 'app', 'servidor')
    }
})