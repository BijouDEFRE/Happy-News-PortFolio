const client = require('./client');

const authDataMapper = {
    async getUser (email) {
        const result = await client.query('SELECT * FROM "user" WHERE "email" = $1', [email]);

        if (result.rowcount == 0){
            return null;
        }
        return result.rows[0];
    },

    async createUser(userinfo, hashedPassword) {
        const { email } = userinfo;
        const password = hashedPassword;
        // console.log('hashedPassword', hashedPassword);
        // console.log('userinfo', userinfo);

        /*--- je vérifie si le user existe déjà ---*/
        const isExist = await client.query(`SELECT * FROM "user" WHERE "email" = $1 AND "password" = $2`, [email, password]);

        if (isExist.rowCount != 0) {
            return null;
        }
     
        /*--- il n'est pas présent en BDD ---*/
        const result = await client.query(`INSERT INTO "user" ("first_name", "last_name", "adress", "zip_code", "city", "latitude", "longitude", "email", "password", "company_name", "shop_name", "registration_number", "role_id", "activity_id", "content")
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *`,
              [
                  userinfo.first_name,
                  userinfo.last_name,
                  userinfo.adress,
                  userinfo.zip_code,
                  userinfo.city,
                  userinfo.latitude,
                  userinfo.longitude,
                  userinfo.email,
                  password,
                  userinfo.company_name,
                  userinfo.shop_name,
                  userinfo.registration_number,
                  userinfo.role_id,
                  userinfo.activity_id,
                  userinfo.content
              ]);
        return result.rows[0];
    },
};

module.exports = authDataMapper;