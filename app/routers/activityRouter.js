/*
activity routes
*/
const express = require('express');
const acitivityController = require('../controllers/activityController');

const router = express.Router();

router.get('/', acitivityController.getAllActivities);
router.get('/:activityId(\\d+)', acitivityController.getActivityById);

module.exports = router;