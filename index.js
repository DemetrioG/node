// Abre conexão com o banco utilizando express
// express.js -> framework que fornece os requisitos para criação de um servidor
const express = require('express')
const app = express()

//Setando as rotas
app.get('/', function(req, res) {
    res.send('Welcome')
})

app.get('/sobre', function(req, res) {
    res.send('Minha página')
})

app.get('/blog', function(req, res) {
    res.send('Meu blog')
})

//Abre a conexão
app.listen(8081, function() {
    console.log('Servidor rodando na url http://localhost:8081')
})