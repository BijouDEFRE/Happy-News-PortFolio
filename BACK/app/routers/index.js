/*
 routes creation
*/
// require express server created in app.js
const express = require('express');

const userRouter = require('./userRouter');
const authController = require('../controllers/authController');
const errorController = require('../controllers/errorController')

const router = express.Router();

router.use('/user', userRouter);

router.use('/login', authController.handleLoginForm);
router.use('/signup', authController.handleSignForm);

router.use(errorController.error404);

// Un middleware d'erreur se déclore comme les autres
// express vera la différence car il EXACTEMENT 4 paramètres déclarés
// En plus ce sont toujours les derniers
router.use(errorController.error404);
router.use(errorController.error500);

module.exports = router;