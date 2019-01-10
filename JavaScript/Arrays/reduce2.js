const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.3, bolsista: false},
    {nome: 'Pedro', nota: 10, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false},
]

// Desafios 1 e 2 da forma que eu fiz
// Desafio 1: todos os alunos são bolsistas?

const resultado1 = alunos.map(e => e.bolsista).reduce(function(acum, atual){
    return acum * atual;
});

r1 = !!resultado1 == true ? true : false;
console.log(`Todos os alunos são bolsistas? ${r1}`);

// Desafio 2: algum aluno é bolsista?

const resultado2 = alunos.map(e => e.bolsista).reduce(function(acum, atual){
    return acum + atual;
});

r2 = !!resultado2 == true ? true : false;
console.log(`Algum aluno é bolsista? ${r2}`);


// Desafios 1 e 2 da forma que o professor fez
console.log('\nResposta do professor\n');

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log("Algum aluno é bolsista? "+alunos.map(e => e.bolsista).reduce(todosBolsistas));

const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log("Algum aluno é bolsista? "+alunos.map(e => e.bolsista).reduce(algumBolsistas));