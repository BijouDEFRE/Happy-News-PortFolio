/*

*/
const client = require('./client');

module.exports = {

    async getAllUsers() {
        const result = await client.query('SELECT * FROM "user"');
        return result.rows;
    },
    //SELECT "email", "password" FROM "user" WHERE "email" = 'micheline@laposte.fr' AND "password" = 'mdp';
    // http://localhost:3000/user/login/{"micheline@laposte.fr"}
    // http://localhost:3000/user/login/{email}
    async getUserLogin(email) {
        const result = await client.query('SELECT * FROM "user" WHERE email = $1', [email]);
        if (result.rowCount == 0) {
            return null;
        }
        console.log(result.rows);
        return result.rows[0];
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