const mongoose = require('mongoose');

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', err => {
	console.log('Database error: ', err);
});

database.once('connected', () => {
	console.log('Database connected');
});


