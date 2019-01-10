const soma = function(x, y){
    return x + y;
}

const imprimirResultado = function (a, b, operacao = soma) { //O parametro operacao recebe uma funcao como parametro. É como se uma funcao fosse uma variavel
    console.log(operacao(a, b));
}

imprimirResultado(3,4);
imprimirResultado(2,7, soma);
imprimirResultado(3, 4, function (x, y) {
    return x - y;
});

imprimirResultado(3,4, (x,y) => x * y); //Passando uma arrow function

const pessoa = {
    falar: function(){
        console.log("opa");
    }
}

pessoa.falar();