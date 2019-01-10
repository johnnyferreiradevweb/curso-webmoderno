const aprovados = ['John','Dani','Ana','Raquel'];

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}: ${nome}`);
});

aprovados.forEach(nome => {
    console.log(nome);
});

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);

aprovados.forEach(function(nome, indice, array){ // Um terceiro parametro é o array que esta sendo trabalhado. Um quarto parametro é undefined
    console.log(`${indice + 1}: ${nome}`);
    console.log(array);
});

