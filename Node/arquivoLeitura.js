const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Lendo de forma sincrona... (pode travar o event looping caso o arquivo seja grande)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);

// Assincrono... (recomendado)
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`);
})

const config = require('./arquivo.json') // Tras o arquivo ja convertido em objeto
console.log(config.db);

// Ler o conteudo de um diretorio
fs.readdir(__dirname, (err, arquivos) => { // __dirname representa o diretorio atual
    console.log('Conteudo da pasta...');
    console.log(arquivos);
})
