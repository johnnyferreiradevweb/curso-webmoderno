import React from 'react'
import ReactDOM from 'react-dom' // Primeira letra sempre maiuscula (usei minuscula e deu erro)

// Importação de componentes personalisados
//import BomDia from './componentes/BomDia'

// Renderizando um elemento na pagina. Todos os elementos vão dentro da div com id = root (index.html)

/*
//import Multi from './componentes/Multiplos'

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana"/>
        <Multi.BoaNoite nome="Bia"/>
    </div>
    , document.getElementById('root')) // <Tag /> recebe o retorno de um modulo personalisado
*/

/* Algumas observações...

    Esse <h1>React</h1> não é HTML. É JSX, uma especie de JavaScript estendido

    Ao utilizar o codigo acima, algo parecido com $(<div>).html('React') do jQuery irá acontecer.
    Uma especie de conversão (transpile).

*/

/*
// Aula sobre classe
import Saudacao from './componentes/Saudacao'

ReactDOM.render(<Saudacao tipo="Bom Dia" nome="João"/>, document.getElementById('root'))
*/

// Aula sobre componentes pai e filho
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <Pai nome="João Batista" sobrenome="Ferreira">
        <Filho nome="Johnny"/>
        <Filho nome="Maria Ayanne" />
    </Pai>
    , document.getElementById('root'))