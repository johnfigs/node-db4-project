const express = require('express')
const helmet = require('helmet')
const router = require('./router')

const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api/recipes', router)


  
module.exports = server;