/*
 user routes
*/
const express = require('express');
const userController = require('../controllers/userController');
// const postSchema = require('../validation/schema/user');
// const { validateBody } = require('../validation/validationMiddleware');
const router = express.Router();

router.get('/', userController.getAllUser);
router.get('/:userId', userController.getUserById);

//router.post('/', validateBody(postSchema), userController.createUser);

module.exports = router;