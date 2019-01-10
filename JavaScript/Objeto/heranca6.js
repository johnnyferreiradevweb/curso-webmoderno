function aula(nome, video) {
    this.nome = nome;
    this.video = video;
}

const aula1 = new aula('Bem vindo', 123);
const aula2 = new aula('Aula 2', 456);

console.log(aula1, aula2);

// Simulando o operador new
function novo(f, ...params){ // Esse operador ... pega n parametros que foram chamados na chamada da funcao e coloca em um array
    const obj = {}
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj;
}

const aula3 = novo(aula, 'Aula 3', 123);
console.log(aula3);

// Testando o operador ...
function teste(...todosParams){
    for(let i=0; i<todosParams.length; i++){
        console.log(todosParams[i]);
    }

    return todosParams;
}

console.log(teste('a',2,3,4,5));
