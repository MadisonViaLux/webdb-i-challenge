const express = require('express');

const db = require('../data/dbConfig');

const server = express.Router();

server.get('/', (req, res) => {
    db.select('*').from('accounts')
    // db('accounts')
        .then(lol => {
            res.status(200).json(lol)
        })
        .catch(error => {
            res.status(500).json({message: 'jhdfejhberafghjb'})
        })
});

server.get('/:id', (req, res) => {
    db('accounts')
    .where({id: req.params.id})
    .first()
    .then(post => {res.status(200).json(post)})
    .catch(error => {
        res.status.apply(500).json({message: 'nothing'})
    })
});




module.exports = server;