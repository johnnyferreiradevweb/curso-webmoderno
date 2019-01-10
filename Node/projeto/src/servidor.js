const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bd = require('./bancodeDados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, resp, next) =>{
    resp.send(bd.getProdutos()) // Vai converter para  JSON
})

app.get('/produtos/:id', (req, resp, next) => {
    resp.send(bd.getProduto(req.params.id))
})

app.post('/produtos', (req, resp, next) =>{
    const produto = bd.salvarProduto({
        nome: req.bory.name,
        preco: req.bory.preco
    })
    resp.send(produto) // Irá gerar um JSON
})

/*
// Teste - qualquer url atende ao middlware
app.use((req, resp, next) =>{
    resp.send({nome: 'Notebook', preco: 1230.99}) // Vai converter para  JSON
})
*/

app.listen(porta, ()=>{
    console.log(`Servidor esta executando na porta ${porta}`);
})