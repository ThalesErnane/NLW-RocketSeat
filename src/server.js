// Servidor
const express = require('express')
const server = express()

const {
    pagLanding,
    pagStudy,
    pagGiveClasses,
    saveClasses
} = require('./pags')

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server, 
    noCache: true, 
})

// Inicio e configuração do servidor 

// receber os dados do req.body 
server.use(express.urlencoded({ extended: true }))

// configurar arquivos staticos (css, scripts, imagens)
server.use(express.static("public"))


// rotas da aplicação 
server.get("/", pagLanding) 
server.get("/study", pagStudy)
server.get("/give-classes", pagGiveClasses)
server.post("/save-classes", saveClasses)
server.listen(5500) // start do servidor 