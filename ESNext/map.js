// Assemelha-se a um objeto mas não substitui seu uso

const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.get('react').framework);

// Outra maneira de criar um Map
const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((valor, chave) =>{
    console.log(chave, valor);
})

console.log(chavesVariadas.has(123)); // A funcao has verifica se um elemento esta contido em outro
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size); // .size: mostra o total de elementos que esta contido

