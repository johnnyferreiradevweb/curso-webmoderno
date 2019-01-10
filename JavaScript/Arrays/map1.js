/* // Se eu quisese fazer minha propria versão do map, seria assim
Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i=0; i< this.length; i++){
        newArray.push(callback(this[i], i, this));
    }

    return newArray
}
*/

const nums = [1,2,3,4,5];

// Map é um for com proposito

let resultado = nums.map(function (e) {
    return e * 2;
});

console.log(resultado);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`;


console.log(paraDinheiro(2000))

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);

console.log(resultado);
