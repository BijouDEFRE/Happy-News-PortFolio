/*
User Data Mapper
*/
const client = require('./client');

module.exports = {

    async getAllUsers() {
        const result = await client.query(`SELECT
        u.id,
        u.first_name,
        u.last_name,
        u.email,
        u.password,
        u.adress,
        u.zip_code,
        u.city,
        u.latitude,
        u.longitude,
        u.shop_name,
        u.registration_number,
        u.role_id,
        u.content,
        a.id AS activity_id, a.activity_name
        FROM "user" AS u
        JOIN "activity" AS a ON u.activity_id = a.id`);

        return result.rows;
    },

    async getUserById(userId) {
        const result = await client.query(`SELECT
        u.id,
        u.first_name,
        u.last_name,
        u.email,
        u.password,
        u.adress,
        u.zip_code,
        u.city,
        u.latitude,
        u.longitude,
        u.shop_name,
        u.registration_number,
        u.role_id,
        u.content,
        a.id AS activity_id, a.activity_name
        FROM "user" AS u
        JOIN "activity" AS a ON u.activity_id = a.id
        WHERE u.id = $1`, [userId]);

        // I wait for a user
        // and not for a list containing 1 user
        // there is an error case, if the id doesn't correspond to a user
        // in this case we can't send data

        if (result.rowCount == 0) {
            // If there is no user, I send null instead of my object
            // It will be simple to test for dataMapper user
            return null;
        }
        return result.rows[0];
    },

    async updateUserById(userId, userUpdate) {
        // I test if user already exists
        const isExist = await client.query(`SELECT * FROM "user" WHERE id = $1`, [userId]);
        console.log('userinfo', isExist);

        if (isExist.rowCount >= 0) {
            const updateUser = await client.query(`UPDATE "user" SET "first_name" =$1, "last_name" = $2,
             "adress" = $3, "zip_code" = $4, "latitude" = $5, "longitude" = $6, "city" = $7, "email" = $8, "password" = $9, "company_name" = $10, "shop_name" = $11, "registration_number" = $12, "activity_id" = $13, "content" = $14
             WHERE id = $15 RETURNING *`,
            [
                userUpdate.first_name,
                userUpdate.last_name,
                userUpdate.adress, 
                userUpdate.zip_code,
                userUpdate.latitude,
                userUpdate.longitude,
                userUpdate.city,
                userUpdate.email,
                userUpdate.password,
                userUpdate.company_name,
                userUpdate.shop_name,
                userUpdate.registration_number,
                userUpdate.activity_id,
                userUpdate.content,
                // userUpdate.updated_at = new Date(),
                userId       
            ]);
            return updateUser.rows;
        }
    },

    async deleteUserById(userId) {
        const result = await client.query(`DELETE FROM "user" WHERE id=$1`, [userId]);
        if (result.rowCount == 0) {
            return 'User not exist';
        }
        return result.rows;
    },
}