/*
 article routes
*/
const express = require('express');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.get('/', articleController.getAllArticles);
router.get('/:articleId(\\d+)', articleController.getArticleById);
router.get('/activity/:activityId(\\d+)', articleController.getArticlesByActivityId);

router.post('/', articleController.createArticle);
router.post('/:id/uploadImage', articleController.addArticleImage);

router.patch('/:articleId(\\d+)', articleController.updateArticle);

router.delete('/:articleId(\\d+)', articleController.deleteArticle);

module.exports = router;