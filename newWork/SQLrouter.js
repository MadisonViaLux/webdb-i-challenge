const express = require('express')
const db = require('../data/dbConfig.js');
const router = express.Router()


router.get('/', (req, res) => {
    // db('accounts')
    //     .then(acc => res.status(200).json(acc))
    //     .catch(err => res.send(err))
    db.select('*')
        .from('accounts')
        .then(acc => res.status(200).json(acc))
        .catch(err => res.send(err))
})


router.get('/:id', (req, res) => {
    // db('accounts')
    db.select('*')
        .from('accounts')
        .where({ id: req.params.id })
        .then(acc => res.status(200).json(acc))
        .catch(err => res.send(err))
})


router.post('/', (req, res) => {
    const newData = req.body

    db('accounts')
        .insert(newData, {
            id: req.body.id,
            name: req.body.name,
            budget: req.body.budget
        })
        .then(acc => res.status(200).json(acc))
        .catch(err => res.send(err))
})


router.put('/:id', (req, res) => {
    const newerData = req.body

    db('accounts')
        .where({ id: req.params.id })
        .update(newerData)
        .then(acc => res.status(200).json(acc))
        .catch(err => res.send(err))
})







module.exports = router