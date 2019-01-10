const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir); // Muito foda! Para cada elemento do array ele chama a funcao imprimir


fabricantes.forEach(function (fabricante) {
    console.log(fabricante);
});