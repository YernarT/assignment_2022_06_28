const mongoose = require('mongoose');

DATABASE_URL = 'mongodb://localhost:27017/interview-task';
const mongoString = DATABASE_URL;
mongoose.connect(mongoString);

const database = mongoose.connection;
database.on('error', err => {
	console.log('Database error: ', err);
});
database.once('connected', () => {
	console.log('Database connected');
});

const articleScheme = new mongoose.Schema({
	title: {
		required: true,
		type: String,
	},

	content: {
		required: true,
		type: String,
	},
});

module.exports = mongoose.model('Article', articleScheme);
