const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMd')
const usuarioAPI = require('./api/usuario')

require('./api/produto')(app, ' com param!')

app.post('/usuario', usuarioAPI.salvar)
app.get('/usuario', usuarioAPI.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(saudacao('Johnny'))

// Função middleware
app.use('/opa', (req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/cliente/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function (parte) {
    //     corpo += parte
    // })

    // req.on('end', function () {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    //     res.send(corpo)
    // })
    res.send(req.body)
})

app.get('/cliente/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.get('/opa', (req, res, next) => {
    res.json({
    data: [
        {id: 7, name: "Ana", position: 1},
        {id: 34, name: "Bia", position: 2},
        {id: 73, name: "Carlos", position: 3}
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200 })

    // res.json({
    //     name: "iPad 32Gb",
    //     price: 1899.00,
    //     discount: 0.12
    // })


    //res.send('<h1>É possível retornar HTML</h1><br><h2>Isso é um subtitulo!</h2>')
    console.log('Durante...')
    next()
})

app.use('/opa', (req, res) => {
    console.log('Depois...')
})

app.listen(3000, () => {
    console.log('Backend executando...')
})