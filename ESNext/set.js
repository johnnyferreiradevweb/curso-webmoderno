// Não aceita repeticao e não é indexada
const times = new Set()
times.add('São Paulo')
times.add('Flamengo').add('Palmeiras').add('Corinthias')
times.add('Fortaleza')
times.add('São Paulo')

console.log(times);
console.log(times.size);
console.log(times.has('são paulo'));
console.log(times.has('São Paulo'));
times.delete('Flamengo');
console.log(times.has('Flamengo'));

// Criando o Set de outra forma
const nomes = ['Johnny','Ferreira','Johnny','Silva']
const nomesSet = new Set(nomes)
console.log(nomesSet);




