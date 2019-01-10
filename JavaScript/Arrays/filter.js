// Uma forma de filtrar um array

const produtos = [
        {nome: 'Notebook', preco: 2499, fragil: true},
        {nome: 'IPhone', preco: 4499, fragil: true},
        {nome: 'Copo de vidro', preco: 12.49, fragil: true},
        {nome: 'Copo de plastico', preco: 99, fragil: false}
    ]

/*
console.log(produtos.filter(function(e){
    // return false; Todos os elementos são filtrados
    // return true; Nenhum elemento é filtrado (aparecem todos)
    return e.preco > 2400;
}));
*/

// Criando meu proprio filter
Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            newArray.push(this[i]);
        }
    }

    return newArray
}

// Exercitando

caros = c => c.preco > 2000;
frageis = f => f.fragil;

console.log(produtos.filter2(caros).filter2(frageis));

