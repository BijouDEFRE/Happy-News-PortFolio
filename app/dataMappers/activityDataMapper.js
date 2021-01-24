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
        return result.rows[0];
    },
}