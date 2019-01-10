console.log(soma(2,2));
//console.log(sub(2,2)); // Erro: is not defined
//console.log(mult(2,2)); Erro: is not defined

// function declaration
function soma(x, y) {
    return x + y;
}

//function exprection
const sub = function(x,y){
    return x - y;
}

console.log(sub(2,2));

//named function exprection
const mult = function mult(x,y){
    return x * y;
}