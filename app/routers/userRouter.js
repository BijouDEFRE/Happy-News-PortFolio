/*
 user routes
*/
const express = require('express');
const userController = require('../controllers/userController');
// const userSchema = require('../validation/schema/user');
// const { validateBody } = require('../validation/validationMiddleware');
const router = express.Router();

router.get('/', userController.getAllUser);
router.get('/:userId(\\d+)', userController.getUserById);

// router.patch('/:userId(\\d+)', validateBody(userSchema), userController.updateUserById);
router.patch('/:userId(\\d+)', userController.updateUserById);
router.delete('/:userId(\\d+)', userController.deleteUserById);

module.exports = router;