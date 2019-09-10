const knex = require('knex');

const configOP = require('../knexfile.js');

module.exports = knex(configOP.development);