import Pessoa from './pessoa'
import './assets' // Deve-se cadastrar o loader do css no arquivoo de configuração, para evitar erros

const atendente = new Pessoa
console.log(atendente.cumprimentar());
