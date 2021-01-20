/*
 user routes
*/
const express = require('express');
const userController = require('../controllers/userController');
// const postSchema = require('../validation/schema/user');
// const { validateBody } = require('../validation/validationMiddleware');
const router = express.Router();

router.get('/', userController.getAllUser);
router.get('/login/:email', userController.getUserLogin);
router.get('/:userId', userController.getUserById);

module.exports = router;