const pilotos = ['Vetel', 'Alonso', 'Raikonen','Massa'];

pilotos.pop(); // Remove o ultimo elemento da lista
console.log(pilotos);

pilotos.push('Vestappen'); // Adiciona um elemento na ultima posição
console.log(pilotos);

pilotos.shift(); // Remove o primeiro elemento da lista
console.log(pilotos);

pilotos.unshift('Harmilton'); // Adiciona no inicio da lista
console.log(pilotos);


// Splice pode adicionar ou remover elementos dinamicamente

// Adicionar
pilotos.splice(2, 0, 'Botas', 'Massa');
console.log(pilotos);

// Remover
pilotos.splice(3, 1); // Massa sai
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // Gera um novo array a partir do indice (parametro)
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // do indice 1 a 4 (4 não estará contido)
console.log(algunsPilotos2);

