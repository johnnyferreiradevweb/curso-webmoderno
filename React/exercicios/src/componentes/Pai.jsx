import React from 'react'
import { childrenWithProps } from '../utils/utils'

export default props => 
    // Formas de atribuir um valor do pai ao filho
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* <Filho nome="Johnny" sobrenome={props.sobrenome} />
            <Filho {...props} /> 
            <Filho {...props} nome="Maria Ayanne (sobreescrevendo a propriedade nome)"/> */}

            {childrenWithProps(props)}

            {/* O segundo parametro da função cloneElement serve para adicionar novas propriedades 
                ...props.children.props esta adicionando as propriedades do filho, para que elas não se percam
            */}
        </ul>
    </div>