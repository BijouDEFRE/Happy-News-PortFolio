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

    async createActivity(newActivity) {

        const result = await client.query(`INSERT INTO "activity" ("activity_name", "content")
        VALUES($1, $2) RETURNING *`,
        [
            newActivity.activity_name,
            newActivity.content
        ]);
        return result.rows[0];
    },

    async updateActivityById(activityId, activityUpdate) {
        // I check if activity already exists
        const findActivity = await client.query('SELECT * FROM "activity" WHERE id = $1', [activityId]);

        if (findActivity.rowCount == 0) {
            return 'Activity not exist';
        }
        const result = await client.query(`UPDATE "activity" SET "activity_name" = $1, "content" = $2
        WHERE id = $3 RETURNING *`,
        [
            activityUpdate.activity_name,
            activityUpdate.content,
            activityId
        ]);
        console.log(result.rows);
        // return result.rows[0];
        return 'Activity Updated';
    },

    async deleteActivityById(activityId) {
        const findActivity = await client.query('SELECT * FROM "activity" WHERE id = $1', [activityId]);

        if (findActivity.rowCount == 0) {
            return 'Activity not exist';
        }
        const deleteActivity = client.query('DELETE FROM "activity" WHERE id = $1', [activityId]);

        // return deleteArticle.rowCount;
        return 'Activity Deleted';
    },
}