/*
User Data Mapper
*/
const client = require('./client');

module.exports = {

    async getAllUsers() {
        const result = await client.query('SELECT * FROM "user"');
        return result.rows;
    },

    async getUserById(userId) {
        const result = await client.query('SELECT * FROM "user" WHERE id = $1', [userId]);
        // Je m'attends à recevoir 1 user
        // et pas une liste contenant 1 user

        // il existe en revanche un cas d'erreur
        // si l'id donnée ne correspond à aucun user nous ne pourront pas renvoyer de données

        if (result.rowCount == 0) {
            // Si je n'ai pas de user, je renvoie null à la place de mon objet
            // Ce serra facile à tester pour l'utilisateur de mon dataMapper
            return null;
        }
        return result.rows[0];
    },

    async updateUserById(userId, userUpdate) {
        // je vérifie si le user existe déjà
        const isExist = await client.query('SELECT * FROM "user" WHERE id = $1', [userId]);
        console.log('userinfo', isExist);

        if (isExist.rowCount >= 0) {
            const updateUser = await client.query(`UPDATE "user" SET "first_name" =$1, "last_name" = $2,
             "adress" = $3, "zip_code" = $4, "latitude" = $5, "longitude" = $6, "city" = $7, "email" = $8, "password" = $9, "company_name" = $10, "shop_name" = $11, "registration_number" = $12
             WHERE id = $13 RETURNING *`,
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
                // userUpdate.updated_at = new Date(),
                userId       
            ]);
            return updateUser.rowCount;
        }
    },

    async deleteUserById(userId) {
        const findUser = await client.query('SELECT * FROM "user" WHERE id = $1', [userId]);

        if (findUser.rowCount == 0) {
            return null;
        }
        const deleteUser = client.query('DELETE FROM "user" WHERE id = $1', [userId]);

        return deleteUser.rowCount;
    },

}