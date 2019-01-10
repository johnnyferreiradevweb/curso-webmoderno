// usando spread com objeto

const funcionario = {
    nome: 'Maria', 
    salario: 12348.00
}

const clone = {ativo: true, ...funcionario}

console.log(clone);
console.log(funcionario);

// usando spread em um array
const grupoA = ['Joao', 'Pedro','Gloria']
const grupoB = ['Maria', 'Joaquin', ...grupoA, 'Rafaela']

console.log(grupoB);

