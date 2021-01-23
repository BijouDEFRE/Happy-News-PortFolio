require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
    try {
      const token = request.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.ACCES_TOKEN_SECRET);
      const userId = decodedToken.userId;
      if (request.body.userId && request.body.userId !== userId) {
        throw 'Invalid user ID';
      } else {
          response.locals.userID = userId;
        next();
      }
    } catch {
      response.status(401).json({
        error: new Error('Invalid request!')
      });
    }
};