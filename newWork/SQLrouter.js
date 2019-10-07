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
    db.select('*')
        .from('accounts')
        .where({ id: req.params.id })
        .then(acc => res.status(200).json(acc))
        .catch(err => res.send(err))
})







module.exports = router