const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c}}
console.log(JSON.stringify(obj));

//console.log(JSON.parse("{a: 1, b: 2, c:5}"));
//console.log(JSON.parse("{'a':1, 'b':2, 'c':3}"));
console.log(JSON.parse('{"a":1, "b":2, "c":3}')); // Correto

const obj1 = JSON.parse('{"a":1, "b":2, "c":3}');
console.log(obj1.a);

console.log(JSON.parse('{"idade": 20, "b":"Meu nome é johnny", "c":true, "o": {}, "a": []}'));


