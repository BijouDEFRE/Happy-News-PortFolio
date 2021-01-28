/*
Activity Data Mapper
*/
const client = require('./client');

module.exports = {

    async getAllActivities() {
        const result = await client.query('SELECT * FROM "activity"');
        return result.rows;
    },

    async getActivityById(activityId) {
        const result = await client.query('SELECT * FROM "activity" WHERE id = $1', [activityId]);
        if (result.rowCount == 0) {
            return null;
        }
        console.log(activityId)
        return result.rows[0];
    },

    async getActivityByName(name) {
        const activityName = await client.query('SELECT * FROM "activity" WHERE "activity_name" = $1', [name]);
        if (activityName.rowCount == 0) {
            return null;
        }
        console.log(name);
        return activityName.rows;
    },
}