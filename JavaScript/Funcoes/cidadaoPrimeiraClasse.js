// Forma literal
function fun1(){

}

//Uma funcao pode ser armazenada em uma variavel
const fun2 = function(){
    console.log("meu nome é Johnny");
}

//Uma funcao pode ser armazenada em um Array
const array = [function(a,b){return a + b}, fun1, fun2];

console.log(array[0](2,3));

//Uma funcao pode ser armazenada em um objeto
const obj = {};
obj.falar = function(){return "opa";}

console.log(obj.falar());

//Uma funcao pode ser passada como parametro para outra funcao
function run(fun) {
    fun();
}

run(fun2);

//Uma funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a+b+c);
    }
}

soma(2,3)(4); // Que coisa bizarra lkkkkkkk. Mas funciona



