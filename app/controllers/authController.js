require('dotenv').config();
const authDataMapper = require("../dataMappers/authDataMapper");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const authController = {
    async handleLoginForm(request, response, next) {
        try {
            const email = request.body.email;
            const password = request.body.password;

            const user = await authDataMapper.getUser(email);

            if(!user) {
                response.locals.notFound = "Email et/ou password invalide";
                next();
                return;
            }
            console.log('password', password);
            console.log('user.password', user.password);
            // hashed password validation with bcrypt compareSync

            const isPasswordValid = bcrypt.compareSync(
                 password,
                 user.password
            );
            console.log('isPasswordValid', isPasswordValid);
            if (!isPasswordValid) {
                // error management
                return response.status(401).send({
                    token: null,
                    message: 'Mot de passe incorrect'
                });
            }

            // jwt token management
            // request.session.userID = user.id;
            
            response.json({ 
                logged: true,
                user: [user], 
                userToken: jwt.sign(
                {
                    userId: user.id,
                },
                process.env.ACCES_TOKEN_SECRET,
                { expiresIn: '1h' }
                ) 
            });
            
        } catch (error) {
            next(error);
        }
    },

    async handleSignForm(request, response, next) {
        try {
            const userInfo = request.body;

            const saltRounds = 10;
            const hashedPassword = bcrypt.hashSync(userInfo.password, saltRounds);

            const newUser = await authDataMapper.createUser(userInfo, hashedPassword);

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