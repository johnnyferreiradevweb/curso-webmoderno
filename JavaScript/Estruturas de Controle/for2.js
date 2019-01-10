//Estudando for in

const notas = [6,7,8,9,10];

for(i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Johnny',
    sobrenome: 'Ferreira',
    idade: 20,
    peso: 59.2
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}

console.log(`nome = ${pessoa.nome}`);
