const express = require('express');

const db = require('./work/work-router');

const server = express();

server.use(express.json());

server.use('/api/posts', db);

module.exports = server;