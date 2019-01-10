const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.3, bolsista: true},
    {nome: 'Pedro', nota: 10, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

console.log(alunos.map(a => a.nota));

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador  + atual;
}, 10) // Esse 10 foi um valor que eu determinei que fosse passado inicialmente como acumulador

console.log(resultado);
