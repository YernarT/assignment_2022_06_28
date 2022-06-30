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
router.put('/articles/:id', async (req, res) => {
	let articleId = req.params.id;
	let article;

	try {
		article = await ArticleModel.findById(articleId);
	} catch (err) {
		res.status(400).json({ 'message': 'Ресурс не существует' });
	}

	if (article) {
		article.title = req.body.title ?? article.title;
		article.content = req.body.content ?? article.content;

		await article.save();

		res.status(200).json(article);
	} else {
		res.status(400).json({ 'message': 'Ресурс не существует' });
	}
});

// Delete
router.delete('/articles/:id', async (req, res) => {
	let articleId = req.params.id;
	let article;

	try {
		article = await ArticleModel.findById(articleId);
	} catch (err) {
		res.status(400).json({ 'message': 'Ресурс не существует' });
	}

	if (article) {
		await article.remove();

		res.status(200).json({});
	} else {
		res.status(400).json({ 'message': 'Ресурс не существует' });
	}
});

module.exports = router;
