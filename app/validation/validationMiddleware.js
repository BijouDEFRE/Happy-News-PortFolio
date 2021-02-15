module.exports = {

    validateBody(schema) {
        return async (request, response, next) => {
            try {
                const validation = await schema.validateAsync(request.body);

                // validation has an error prop if there is a problem
                if (validation.error) {
                    // error response
                    response.status(400).json({error: validation.error});
                    return;
                }
                next();

            } catch (error) {
                if (error.message == 'user.invalid (user_id)') {
                    response.status(400).json({error: {
                        details: error.message,
                        message: "Le user id n'existe pas"
                    }});
                    return;
                }
                next(error);
            }
        };
    },
};