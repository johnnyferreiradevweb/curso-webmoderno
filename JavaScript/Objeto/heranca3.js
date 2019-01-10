const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai); // Serve para informar que filha herda de pai

filha1.nome = 'Ana';
console.log(filha1.nome);
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
});

console.log(filha2.nome);
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);
console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

// Verificando se os atributos de filha2 vieram por heranca ou se pertencem a ela
for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por heranca: ${key}`);
}

for(let key in filha2){
    !filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Esse atributo é de filha2: ${key}`);
}

