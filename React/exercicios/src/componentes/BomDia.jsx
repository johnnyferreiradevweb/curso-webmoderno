import React from 'react'
//import React, {Fragment} from 'react' // Se eu fizer dessa forma não é necessario escrever React. , basta escrever Fragment

/*
// Para que seja possivel enviar duas tags, deve-se envolver com uma tag pai
export default props => // Para que a tag que envolve os elementos não seja renderizada deve-se usar React.Fragment
    <React.Fragment>
        <h1>Bom Dia {props.nome}!</h1>
        <h2>Até breve</h2>
    </React.Fragment>
*/

// Também é possivel retornar mais de um elemento usando um array
// OBS: é importante utilizar uma key para identificar de forma mais tranquila os componentes
export default props => [
    <h1 key="h1">Bom Dia {props.nome}!</h1>,
    <h2 key="h2">Até breve</h2>
]