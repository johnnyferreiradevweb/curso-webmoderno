const produto = new Object;
produto.nome = "Cadeira";
produto['Marca do prodito'] = 'Genericos';
produto.preco = 220.01

console.log(produto);
delete produto.preco;
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Johnny',
        idade: 20,
        endereco: {
            rua: "Fulana de tal",
            numero: 103
        }
    },
    condutores: ['John','Silva'],
    calcularValorSeguro(){
        console.log("teste...");
    }
}

console.log(carro);

carro.proprietario.endereco.numero = 1000;
console.log(carro);

carro['proprietario']['endereco']['numero'] = 1220;
console.log(carro);
