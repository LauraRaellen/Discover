const express = require (`express`)
const { route } = require('express/lib/application')

const houte = require('./route')

const server = express()

server.set('view engine', 'ejs')



server.use(route)

server.listen(3000, () => console.log("RODANDO"))