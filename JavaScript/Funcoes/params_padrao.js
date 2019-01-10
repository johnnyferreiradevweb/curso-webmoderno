//Gerando parametros padrao
function soma(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma());
console.log(soma(2,3));
console.log(soma(10));
// O problema esta aqui
console.log(soma(0,0,0));

// De uma outra forma, usando operador ternario
function soma2(a, b, c) {
    a = a != undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c; //Ideal para caso a intençao seja trabalhar somente com numeros
    return a + b + c; 
}
console.log('\nSoma 2\n');

console.log(soma2());
console.log(soma2(2,3));
console.log(soma2(10));
console.log(soma2(0,0,0));

//Usando o valor padrão do ec2015 - Recomendada

function soma3(a=1, b=1, c=1) {
    return a + b + c;
}

console.log('\nSoma 3\n');

console.log(soma3());
console.log(soma3(2,3));
console.log(soma3(10));
console.log(soma3(0,0,0));
