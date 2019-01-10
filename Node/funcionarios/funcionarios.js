const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Minha resposta
const eUmaMulher = pessoa => pessoa.genero == 'F'
const eDaChina = pessoa => pessoa.pais == 'China'
const salario = pessoa => pessoa.salario
const menorSalario = function(menor, atual){
    return menor > atual ? atual : menor
}

// Resposta do professor
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSal = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    funcionarios = response.data

    // Minha resposta
    const respostaFiltro = funcionarios.filter(eUmaMulher).filter(eDaChina).map(salario).reduce(menorSalario)
    mulherChinesaComMenorSalario = pessoa => pessoa.salario == respostaFiltro
    const resultadoFinal = funcionarios.filter(mulherChinesaComMenorSalario)
    console.log(resultadoFinal);
    
    // Resposta do professor
    const respProfessor = funcionarios.filter(chineses).filter(mulheres).reduce(menorSal)
    console.log(respProfessor);   
})




