// Object.preventExtensions - evita o acrescimo de atributos ao obj

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
});

console.log('Extensivel: ', Object.isExtensible(produto));
produto.nome = 'Borracha'; // Atributos podem ter seu valor modificado
produto.descricao = 'teste'; // Não permite o acrescimo de atributos
delete produto.tag; // Atributos podem ser deletados
console.log(produto);

// Object.seal
const pessoa = {nome: 'julia', idade: 35}
Object.seal(pessoa); // Nao permite adicionar e nem excluir atributos. Permite modificar o valor do atributo
console.log('Selado: ', Object.isSealed(pessoa));
pessoa.sobrenome = 'teste';
delete pessoa.nome;
pessoa.nome = 'Julia';
console.log(pessoa);

// Objetc.freeze = selado + valores constantes


