/*
activity routes
*/
const express = require('express');
const acitivityController = require('../controllers/activityController');

const router = express.Router();

router.get('/', acitivityController.getAllActivities);
router.get('/:activityId(\\d+)', acitivityController.getActivityById);

router.post('/', acitivityController.createActivity);
router.patch('/:activityId(\\d+)', acitivityController.updateActivityById);
router.delete('/:activityId(\\d+)', acitivityController.deleteActivityById);

module.exports = router;