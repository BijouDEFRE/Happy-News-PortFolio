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

    async createUser(user) {
        const result = await client.query(`INSERT INTO "user"("first_name", "last_name", "email", "password", "adress", "zip_code", "city", "role_id")
                                           VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
                                           [
                                            user.first_name,
                                            user.last_name,
                                            user.adress,
                                            user.zip_code,
                                            user.email,
                                            user.password,
                                            user.company_name,
                                            user.shop_name,
                                            user.registration_number,
                                            user.user_id
                                        ]);
        return result.rows[0];
    }
}