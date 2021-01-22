require('dotenv').config();
const authDataMapper = require("../dataMappers/authDataMapper");
const jwt = require('jsonwebtoken');

const authController = {
    async handleLoginForm(request, response, next) {
        try {
            const email = request.body.email;
            const password = request.body.password;

            const user = await authDataMapper.getUser(email, password);

            if(!user) {
                response.locals.notFound = "Email et/ou password invalide";
                next();
                return;
            }
            
            request.session.userID = user.id;
            
            response.json({ user, userToken: jwt.sign(
                {
                    userId: user.id,
                },
                process.env.ACCES_TOKEN_SECRET,
                { expiresIn: '1h' }
            ) });

        } catch (error) {
            next(error);
        }
    },

    async handleSignForm(request, response, next) {
        try {
            const userInfo = request.body;

            const newUser = await authDataMapper.createUser(userInfo);

            if(!newUser) {
                response.locals.notFound = "Vous n'avez pas encore de compte";
                next();
                return;
            }

            response.json({
                data: newUser
            })

        } catch (error) {
            next(error);
        }
    },
};

module.exports = authController;