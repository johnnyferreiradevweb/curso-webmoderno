function soma() {
    let soma = 0;
    for(i in arguments){ //Array interno que possibilita a passagem de parametros variaveis
        soma += arguments[i];
    }
    return soma;
}

console.log(soma(1,2,3,4,5));
console.log(soma());
console.log(soma(1.1, 2.2, "teste"));
console.log(soma("Johnny ", "Ferreira ", " Silva"));



