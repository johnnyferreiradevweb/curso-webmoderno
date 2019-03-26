import React from 'react'

// Formas de exportar multiplos módulos

// OBS: Cada forma de exportar tem uma forma de importar distintamente

// Forma 1
export const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>
export const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>

// Forma 2
//export default BoaTarde

// Forma 3
//export { BoaTarde, BoaNoite } // Forma 3.1
export default { BoaTarde, BoaNoite } // Forma 3.2