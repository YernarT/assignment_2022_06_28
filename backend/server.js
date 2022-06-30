const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();

server
	.use(cors())
	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json());

server.use('/api', require('./api/article'));

module.exports = server;
