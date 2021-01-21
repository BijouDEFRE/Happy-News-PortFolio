/*
 routes creation
*/
// require express server created in app.js
const express = require('express');

const userRouter = require('./userRouter');
const articleRouter = require('./articleRouter');
const authController = require('../controllers/authController');
const errorController = require('../controllers/errorController')

const router = express.Router();

router.use('/user', userRouter);

router.use('/login', authController.handleLoginForm);
router.use('/signup', authController.handleSignForm);

router.use('/article', articleRouter);

router.use(errorController.error404);

router.use(errorController.error404);
router.use(errorController.error500);

module.exports = router;