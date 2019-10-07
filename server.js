const express = require('express');
const SQLrouter = require('./newWork/SQLrouter')
const server = express();

server.use(express.json());
server.use('/api', SQLrouter)

server.get('/', (req, res) => {
    res.send('<h1>Hello There</h1>')
})






module.exports = server;