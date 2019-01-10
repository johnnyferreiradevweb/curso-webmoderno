// O caminho inteiro do arquivo pode ser colocado no require 
const moduloA = require('../../modulo_a') // Cuidado! Respeitar o nome do arquivo. Deve ser igual
console.log(moduloA.ola);

const c = require('./pastaC')
console.log(c.ola2);

/*
const http = require('http')
http.createServer((req, resp) => {
    resp.write('Bom dia!')
    resp.end()
}).listen(8080)
*/
