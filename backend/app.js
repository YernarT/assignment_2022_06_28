const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app
	.use(cors())
	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json());

app.use('/api', require('./api/article'));

app.listen(process.env.PORT || 8000, () =>
	console.log('app is running on port 8000'),
);
