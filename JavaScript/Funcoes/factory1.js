// Implementações podem causar muita repeticao de codigo
const prod1 = {
    nome: '...',
    preco: 45.00
}

const prod2 = {
    nome: 'Outro nome',
    preco: 145.00
}

// Factory simples
function criarPessoa(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}

let Pessoa1 = criarPessoa("Johnny", "Ferreira");
console.log(Pessoa1);
