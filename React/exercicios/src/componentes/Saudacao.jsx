import React, {Component} from 'react' // Similar a React.Component

// Trabalhando com Classe
export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props) // Necessário
        
        // Para que dentro de onChange possa utilizar this.setTipo ao invez de e => this.setTipo(e) deve-se fazer...
        this.setTipo = this.setTipo.bind(this) // Dessa forma o this.setTipo sempre ira referenciar o componente atual
    }

    setTipo(e) {
        this.setState({tipo: e.target.value}) // Altera o estado
    }

    setNome(e) {
        this.setState({nome: e.target.value}) // Altera o estado
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}

