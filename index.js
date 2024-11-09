// Não é mais tudo !!!!
const express = require('express')
const routers = requireUsuario('./src/routes/usuario')
const routers = require ('./src/routes/cachorro')

const database = require('./src/config/database')

const app = express()
app.use("/client", routersUsuario)
app.use("/dog", routers)
const PORT = 3000

database.db
    .sync({ force: false })
    .then((_) => {
        console.info("Banco conectado com sucesso")
        app.listen(PORT, () => {
            console.info(`Servidor rodando na porta ${PORT}`)
        })
    })
    .catch((e) => {
        console.error(`Conexão falhou: ${e}`)
    })


