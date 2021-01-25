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
}