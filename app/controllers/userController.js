const userDataMapper = require('../dataMappers/userDataMapper');
const bcrypt = require('bcryptjs');

module.exports = {

    async getAllUser(_, response, next) {
        try {
            const users = await userDataMapper.getAllUsers();
            response.json({
                message: 'All users',
                data: users
            });
        } catch (error) {
            // Error management middlewares are dans a specific controller "errorController"
            // where we go when we call next with error as an argument
            next(error);
        }
    },

    async getUserById(request, response, next) {
        try {
            // I extract prop userId from my params with destructuration
            const { userId } = request.params;

            const user = await userDataMapper.getUserById(userId);

            if (! user) {
                // By calling next() we go to next middleware who answers to my route
                // Last middleware who answers to all routes is 404 middleware

                response.locals.notFound = "user";
                next();
                return;
            }

            response.json({
                message: 'User by id',
                data: user
            });

        } catch(error) {
            next(error);
        }
    },

    async updateUserById(request, response, next) {
        try {
            const { userId } = request.params;
            const userInfo = request.body;
            const saltRounds = 10;
            const hashedPassword = bcrypt.hashSync(userInfo.password, saltRounds);
            userInfo.password = hashedPassword;
            const user = await userDataMapper.updateUserById(userId, userInfo);
            if(!user) {
                response.locals.notFound = "User not exist"
            }
            response.json({
                message: 'User update',
                data: user });
        } catch (error) {
            next(error)
        }
    },

    async deleteUserById(request, response, next) {
        try {
            const { userId } = request.params;
            const deleteUser = await userDataMapper.deleteUserById(userId);

            if(deleteUser == null) {
                response.locals.notFound = "user unknow";
                next();
                return;
            }
            response.json({
                message: `User ${userId} deleted`,
                data: deleteUser });
        } catch (error) {
            next(error)
        }
    },
}