const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app
	.use(cors())
	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json());

// test data
const users = [
	{ id: 0, name: 'Yernar' },
	{ id: 1, name: 'Erhan' },
	{ id: 2, name: 'Magzhan' },
	{ id: 3, name: 'Eshat' },
];

app.get('/users', (req, res) => {
	res.json(users);
});

app.get('/users/:id', (req, res) => {
	let userId = req.params.id;

	let user = users.find(user => user.id === Number(userId));

	if (user) {
		res.json(user);
	} else {
		res.send('User not found');
	}
});

app.post('/users', (req, res) => {
	let user = req.body;

	user.id = users.length;
	users.push(user);

	res.send('User is added to the database');
});

app.listen(8000, () => console.log('Server is running on port 8000'));
