module.exports = {
    // Middleware to manage 404 errors
    async error404(_, response) {
        if (! response.locals.notFound) {
            response.locals.notFound = "route";
        }

        response.status(404).json({
            error: {
                code: 404,
                type: "not found",
                message: `${response.locals.notFound} not found`
            }
        });
    },
    // In Express there are two middleware chains;: classic and error's
    // You can pas from classic to error's but not the opposite
    // Error chainis there to send 50+ and 40+ errors
    // Error management middlewares take exactly 4 parameters:
    // error, request, response, next
    // To pass from classic to error's chain,
    // or to following middleware in error chain, you call next()
    // passing as a parameter the error

    async error500(error, _, response, __) {
        console.error(error);
        response.status(500).json({
            error: {
                code: 500,
                type: "fatal error",
                details: error
            }
        });
    },
};