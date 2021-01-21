const authDataMapper = require("../datamappers/authDataMapper");

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
            
            response.json({
                data: user,
                message: 'client connecté'
            });

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