// Pessoa aponta para um endereco de memoria: pessoa -> 123 -> {...}
const pessoa = {
    nome: 'Joao'
}
pessoa.nome = 'Pedro';
console.log(pessoa);

// pessoa -> 456 -> {...}
/*pessoa = { // Erro. Pessoa é uma constante
    nome: 'Ana'
}

console.log(pessoa);
*/

// O valor de um atributo de pessoa pode ser alterado, porem o atributo em si n pode ser alterado

Object.freeze(pessoa); // Congela o objeto de forma que ele não pode ser alterado de forma alguma
pessoa.nome = 'Maria';
pessoa.end = 'Rua tal';
console.log(pessoa.nome);
console.log(pessoa);

// Criando e testando
const pessoaConstante = Object.freeze({
    nome: 'Teste'
});

pessoaConstante.nome = 'Rafael';
console.log(pessoaConstante);


