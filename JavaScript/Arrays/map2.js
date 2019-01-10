const carrinho = [
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Caderno", "preco":13.90}',
    '{"nome":"Kit de Lapis", "preco":41.22}',
    '{"nome":"Caneta", "preco":7.5}'
]

// Minha solução
precos = carrinho.map(function (p) {
    obj = JSON.parse(p);
    return obj.preco;
});

console.log(precos);

// Solução do professor
const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const precos2 = carrinho.map(paraObjeto).map(apenasPreco);
console.log(precos2);
