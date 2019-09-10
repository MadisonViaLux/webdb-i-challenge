const express = require('express');

const PostRouters = require('./api/api-router');

const server = express();

server.use(express.json());

server.use('/api/accounts', PostRouters);

module.exports = server;