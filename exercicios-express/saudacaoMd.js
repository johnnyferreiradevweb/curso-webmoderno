// Resolvendo o problema de quando necessita passar parâmetros para o middleware

function saudacao(nome) {
    return function (req, res, next) {
        console.log(`Seja Bem-Vindo ${nome}!`)
        next()
    }
}

module.exports = saudacao