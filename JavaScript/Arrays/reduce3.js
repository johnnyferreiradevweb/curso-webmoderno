Array.prototype.reduce2 = function (callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    var acumulador = valorInicial || this[0];
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, i, this);
    }
    return acumulador;
}

const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.3, bolsista: true},
    {nome: 'Pedro', nota: 10, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

const resultado = alunos.map(a => a.nota).reduce2(function(acumulador, atual){
    return acumulador  + atual;
})

console.log(resultado);


const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log("Algum aluno é bolsista? "+alunos.map(e => e.bolsista).reduce2(todosBolsistas));

const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log("Algum aluno é bolsista? "+alunos.map(e => e.bolsista).reduce2(algumBolsistas));