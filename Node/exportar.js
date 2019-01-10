console.log(module.exports);

console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports);

// Este objeto não sera retornado
exports = { 
    nome: 'teste'
}

console.log(module.exports);

module.exports = {publico: true} // Caso seja necessesario alterar o que se deseja ser exportado, deve-se usar module.exports

