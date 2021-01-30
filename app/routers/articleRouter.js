/*
 article routes
*/
const express = require('express');
const articleController = require('../controllers/articleController');
const {articleImageUploads} = require('../middlewares/articleImageUploads');

const router = express.Router();

router.get('/', articleController.getAllArticles);

router.get('/:articleId(\\d+)', articleController.getArticleById);
router.get('/activity/:activityId(\\d+)', articleController.getArticlesByActivityId);
router.get('/activity/:activity_name', articleController.getArticlesByActivityName);

router.post('/', articleController.createArticle);
router.post('/picture_url/:articleId(\\d+)', articleController.addArticleImage);
// router.post('/picture_url/:articleId(\\d+)', articleImageUploads.single('picture_url'), articleController.addArticleImage);

router.patch('/:articleId(\\d+)', articleController.updateArticleById);

router.delete('/:articleId(\\d+)', articleController.deleteArticle);

module.exports = router;