/*

*/
const client = require('./client');

module.exports = {
    async getUserLogin() {
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
    }
}