// let e const
{
    var a = 2
    let b = 3 // O let so serve para o escopo de um bloco
}

console.log(a);
//console.log(b); // Não esta disponivel

// Template String
const produto = 'Ipad'
console.log(`${produto} 
é 
caro!`); // É possivel quebrar em linhas com enter

// Destructuring
const [l, e, ...tras] = "Teste"
console.log(l,e,tras);

const [x,y] = [1,2,3]
console.log(x,y);

const {idade: i, nome} = {nome: 'Ana', idade:9}
console.log(i, nome);


