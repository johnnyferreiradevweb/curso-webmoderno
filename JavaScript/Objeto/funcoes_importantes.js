const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento', { // Atribui propriedades
    enumerable: true,
    writable: false,
    value: '01/02/1998'
})

pessoa.dataNascimento = '01/01/2000';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign
const dest = {a:1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}

const obj = Object.assign(dest, o1, o2); // Concatena objetos
console.log(obj);

Object.freeze(obj)
obj.c = 123;
console.log(obj);


