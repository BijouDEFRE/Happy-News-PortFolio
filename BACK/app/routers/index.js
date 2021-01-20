/*
 routes creation
*/
// require express server created in app.js
const express = require('express');

const userRouter = require('./userRouter');

const errorController = require('../controllers/errorController')

const router = express.Router();

router.use('/user', userRouter);

router.use(errorController.error404);

// Un middleware d'erreur se déclore comme les autres
// express vera la différence car il EXACTEMENT 4 paramètres déclarés
// En plus ce sont toujours les derniers
router.use(errorController.error500);

module.exports = router;