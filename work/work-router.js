const express = require('express');

const db = require('../data/dbConfig');

const server = express.Router();

server.get('/', (req, res) => {
    db('accounts')
        .then(lol => {
            res.status(200).json(lol)
        })
        .catch(error => {
            res.status(500).json({message: 'jhdfejhberafghjb'})
        })
});

server.get('/', (req, res) => {
    db('accounts')
        .then(lol => {
            res.status(200).json(lol)
        })
        .catch(error => {
            res.status(500).json({message: 'jhdfejhberafghjb'})
        })
});




module.exports = server;