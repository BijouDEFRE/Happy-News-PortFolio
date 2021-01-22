const client = require('./client');

const authDataMapper = {
    async getUser (email) {
        const result = await client.query('SELECT * FROM "user" WHERE "email" = $1', [email]);

        if (result.rowcount == 0){
            return null;
        }
        return result.rows[0];
    },

    async createUser(userinfo) {
        const { email, password } = userInfo;

        // je vérifie si le user existe déjà
        const isExist = await client.query(`SELECT * FROM "user" WHERE "email" = $1 AND "password" = $2`, [email, password]);

        if (isExist.rowCount != 0) {
            return null;
        }
        
        // il n'est pas présent en BDD
        const result = await client.query(`INSERT INTO user(first_name, last_name, adress, zip_code, email, password, company_name, shop_name, registration_number, user_id)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
              [
                  userinfo.first_name,
                  userinfo.last_name,
                  userinfo.adress,
                  userinfo.zip_code,
                  userinfo.email,
                  userinfo.password,
                  userinfo.company_name,
                  userinfo.shop_name,
                  userinfo.registration_number,
                  userinfo.user_id
              ]);
        return result.rows[0];
    }
};

module.exports = authDataMapper;