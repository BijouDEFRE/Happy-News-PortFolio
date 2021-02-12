require('dotenv').config();
const CustomError = require('./CustomError');
const client = require('../dataMappers/client');

module.exports = {

  getRetailerAcces: async (request, reponse, next) => {
      const userRoleId = request.body.user_id;
      console.log(request.body.user_id);
      const userRole = await client.query(`SELECT r.role_name FROM "user" AS u JOIN "role" AS r ON u.role_id = r.id WHERE u.id = $1`, [userRoleId]);

      console.log(userRole.rows[0]);
      if (userRole.rows[0].role_name != "commerçant") {
          return next(new CustomError("Only retaillers can access this route", 403));
      }
      next();
  }
};