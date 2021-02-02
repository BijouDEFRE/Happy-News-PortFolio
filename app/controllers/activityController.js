const activityDataMapper = require('../dataMappers/activityDataMapper');

module.exports = {
    async getAllActivities(_, response, next) {
        try {
            const activities = await activityDataMapper.getAllActivities();
            response.json({
                message: 'All activities', 
                data: activities 
            });
        } catch (error) {
            next(error);
        }
    },

    async getActivityById(request, response, next) {
        try {
            const { activityId } = request.params;
            const activity = await activityDataMapper.getActivityById(activityId);
            response.json({
                message: 'Activity by id',
                data: activity
            });
        } catch (error) {
            next(error);
        }
    },

    async getActivityByName(request, response, next) {
        try {
            const { activityName } = request.params;
            const activities = await activityDataMapper.getActivityByName(activityName);
            response.json({
                message: 'Activity by name',
                data: activities
            });
            console.log(activities);
        } catch (error) {
            next(error);
        }
    },

    async createActivity(request, response, next) {
        try {
            const newActivity = request.body;
            const activity = await activityDataMapper.createActivity(newActivity);

            response.json({
                message: 'Activity create',
                data: activity
            });
        } catch (error) {
            next(error);
        }
    },

    async updateActivityById(request, response, next) {
        try {
            const { activityId } = request.params;
            const updateActivity = request.body;
            const activity = await activityDataMapper.updateActivityById(activityId, updateActivity);

            response.json({
                message: 'Activity updated',
                data: activity
            });
        } catch (error) {
            next(error);
        }
    },

    async deleteActivityById(request, response, next) {
        try {
            const { activityId } = request.params;
            const activity = await activityDataMapper.deleteActivityById(activityId);

            response.json({
                message: 'Activity deleted',
                data: activity
            })
        } catch (error) {
            next(error);
        }
    },
}