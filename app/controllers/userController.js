const userDataMapper = require('../dataMappers/userDataMapper');

module.exports = {

    async getAllUser(_, response, next) {
        try {
            const users = await userDataMapper.getAllUsers();
            response.json({ data: users });
        } catch (error) {
            // Les middlewares pour la gestion d'erreur sont dans une file à part
            // pour partir dans cette file, on appele next en donnant en paramètre
            // l'erreur produite
            next(error);
        }
    },

    async getUserById(request, response, next) {
        try {
            // J'extrait en décomposition la propriété userId dans mes params
            const { userId } = request.params;

            const user = await userDataMapper.getUserById(userId);

            if (! user) {
                // En appelant next() je vais chercher le prochain middleware qui répond
                // a ma route
                // Le dernier middleware qui répond à toutes les routes est donc le middleware
                // 404
                response.locals.notFound = "user";
                next();
                return;
            }

            response.json({ data: user });

        } catch(error) {
            next(error);
        }
    },

    async updateUserById(request, response, next) {
        try {
            const { userId } = request.params;
            const userUpdate = request.body;
            const user = await userDataMapper.updateUserById(userId, userUpdate);
            response.json({ data: user })
        } catch (error) {
            next(error)
        }
    },

    async deleteUserById(request, response, next) {
        try {
            const { userId } = request.params;
            const deleteUser = await userDataMapper.deleteUserById(userId);

            if(deleteUser){
                response.locals.notFound = "user unknow";
                next();
                return;
            }
            response.json({data:deleteUser});
        } catch (error) {
            next(error)
        }
    },
}