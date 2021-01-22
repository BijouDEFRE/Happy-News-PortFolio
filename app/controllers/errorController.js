module.exports = {
    // Middleware pour gérer les erreus 404
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
    // En réalité dans express il existe deux chaines de middleware
    // La classique et celle d'erreur.
    // On peut passer de la classique à l'erreur mais pas l'inverse
    // La chaine d'erreur est la pour renvoyer les erreurs 50+ (les 40+)
    // Les middlewares de gestion d'erreur prennent EXACTEMENT 4 paramêtres:
    // error, request, response, next
    // Pour passer de la chaine classique à la chaine d'erreur,
    // ou au middleware suivant dans la chaine d'erreur
    // on appelle next
    // Mais en lui donnant un paramètre (qui sera notre erreur)
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