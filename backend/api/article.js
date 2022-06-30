const express = require('express');
const router = express.Router();

const ArticleModel = require('../db/schema');

// Read
router.get('/articles', async (req, res) => {
	try {
		const articles = await ArticleModel.find();

		res.status(200).json(articles);
	} catch (err) {
		res.status(500).json({ 'message': err.message });
	}
});

// Create
router.post('/articles', async (req, res) => {
	const article = new ArticleModel({
		title: req.body.title,
		content: req.body.content,
	});

	try {
		const articleCreated = await article.save();

		res.status(201).json(articleCreated);
	} catch (err) {
		res.status(400).json({ 'message': err.message });
	}
});

// Update
router.put('/articles', async (req, res) => {});

// Delete
router.delete('/articles', async (req, res) => {});

module.exports = router;
