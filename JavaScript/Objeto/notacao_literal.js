const a = 1;
const b = 2;
const c = 3;

// Antigamente era assim
const obj1 = {
    a: a,
    b: b,
    c: c
}

// Hoje pode ser usado assim...
const obj2 = {
    a,
    b,
    c
}

console.log(obj1, obj2);

// Antigamente era assim..,

const nomeAttr = 'nota';
const valorAttr = 7.8;

const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3);

// Hoje pode ser usado assim...

const obj4 = {[nomeAttr]: valorAttr};
console.log(obj4);


const obj5 = {
    // Antigamente era assim..,
    funcao1: function(){
        //...
    },
    // Hoje pode ser usado assim...
    funcao2() {
        //...
    } 
}

console.log(obj5);




