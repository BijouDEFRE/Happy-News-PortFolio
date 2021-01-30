const activityDataMapper = require('../dataMappers/activityDataMapper');

module.exports = {
    async getAllActivities(_, response, next) {
        try {
            const activities = await activityDataMapper.getAllActivities();
            response.json({ 
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
                data: activity
            });
        } catch (error) {
            next(error);
        }
    },
}