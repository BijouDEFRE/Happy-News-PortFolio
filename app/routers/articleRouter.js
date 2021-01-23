/*
 article routes
*/
const express = require('express');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.get('/', articleController.getAllArticles);
router.get('/:articleId', articleController.getArticleById);
router.get('/:activityId', articleController.getArticlesByActivity);

router.post('/', articleController.createArticle);
router.post('/:id/uploadImage', articleController.addArticleImage);

router.patch('/:articleId', articleController.updateArticle);

router.delete('/:articleId', articleController.deleteArticle);

module.exports = router;