// ES8: Object.values/entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias de notação
const nome = 'Carla'
const pessoa = {
    nome, // Ja cria o atributo nome e atribui o valor Carla
    ola(){
        console.log('Oi');
    }
}

pessoa.ola()

// Classe
class Animal{}
class Cachorro extends Animal {
    falar(){
        return 'Opa'
    }
}

console.log(new Cachorro().falar());
