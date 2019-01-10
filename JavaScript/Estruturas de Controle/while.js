function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while(opcao!=-1){
    opcao = getInteiroAleatorio(-2, 2);
    console.log(`Opcao escolhida foi ${opcao}`);
}

console.log('Fim do loop');
