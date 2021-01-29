/*
 user routes
*/
const express = require('express');
const userController = require('../controllers/userController');
// const postSchema = require('../validation/schema/user');
// const { validateBody } = require('../validation/validationMiddleware');
const router = express.Router();

router.patch('/:userId(\\d+)', userController.updateUserById);

router.get('/', userController.getAllUser);
router.get('/:userId(\\d+)', userController.getUserById);

//router.post('/', validateBody(postSchema), userController.createUser);

module.exports = router;