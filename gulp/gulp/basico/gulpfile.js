const gulp = require('gulp');

gulp.task('default', () => {
    gulp.start('copiar','fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
    return gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) // Se houver subpastas, deve-se escrever o caminho da seguinte forma: 'pastaA/**/arquivo2.txt'
        // .pipe(transformacao1()) Existe a possibilidade de pegar os aquivos originais e aplicar uma transformação em seu conteduo
        // .pipe(transformacao2()) Por exemplo: Remover todos os espaços e quebra de linhas, entre outras transformações
        .pipe(gulp.dest('pastaB')) // Neste caso, nenhum transformação está sendo feito, portanto, os mesmos arquivos irão pra pastaB
})

gulp.task('antes1', () => {
    console.log('Antes 1');
})

gulp.task('antes2', () => {
    console.log('Antes 2');
})

gulp.task('fim', () => {
    console.log('Fim');
})