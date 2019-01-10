console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Calos', 'Ana'];
console.log(aprovados);
console.log(aprovados[0]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo';
console.log(aprovados[3]);

aprovados.push('John'); // Adiciona um elemento
console.log(aprovados.length);
console.log(aprovados);

aprovados[9] = 'Rafael';
console.log(aprovados);
console.log(aprovados[8] === null);
console.log(aprovados[8] === undefined);

console.log(aprovados.sort()); // Ordena o array 
console.log(aprovados);

// Algumas funcoes retornam um novo array, o que não é o caso do sort()

delete aprovados[1];
console.log(aprovados[1]);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados);
aprovados.splice(1,2); // Exclui a partir do indice (primeiro parametro) a quantidade x de elementos (segundo parametro).
aprovados.splice(0,1,'Johnny','Ferreira','Silva'); //Nesse caso, os demais paramtros serão adicionados no vetor
console.log(aprovados);

// Splice pode ser usado para adicionar elementos em determinado trecho do array
aprovados.splice(1,0,'Teste1','Teste2');
console.log(aprovados);













 

