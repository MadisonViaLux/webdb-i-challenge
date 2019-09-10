const express = require('express');

const db = require('../data/dbConfig');

const server = express.Router();


server.get('/', (req, res) => {
    db('accounts')
        .select('*')
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});




server.get('/:id', (req, res) => {
    const {id} = req.params
    db('accounts')
        .where({id})
        .first()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.json(err)
        })
});




server.put('/:id', (req, res) => {
    const changes = req.body
    db('accounts')
        .where('id', req.params.id)
        .update(changes)
        .then(user => {
            res.status(200).json({message: `updated user ${user}`})
        })
        .catch(err => {
            res.json(err)
        })
});




server.post('/', (req, res) => {
    const userData = req.body
    db('accounts')
        .insert(userData, 'id')
        .then( ( [id] ) => {
            db('posts')
                .where({id})
                .first()
                .then(response => {
                    res.status(200).json(response)
                })
            res.status(200).json(id)
        })
        .catch(err => {
            res.json(err)
        })
});




server.delete('/:id', (req, res) => {
    db('accounts')
        .where({id: req.params.id})
        .del()
        .then(user => {
            res.status(200).json({message: `user ${user} deleted`})
        })
        .catch(err => {
            res.json(err)
        })
});




module.exports = server;