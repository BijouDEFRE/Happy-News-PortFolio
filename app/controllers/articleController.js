const articleDataMapper = require('../dataMappers/articleDataMapper');
const activityDataMapper = require('../dataMappers/activityDataMapper');

module.exports = {
    async getAllArticles(_, response, next) {
        try {
            const articles = await articleDataMapper.getAllArticles();
            response.json({ 
                data: articles 
            });
        } catch (error) {
            next(error);
        }
    },

    async getArticleById(request, response, next) {
        try {
            const { articleId } = request.params;
            const article = await articleDataMapper.getArticleById(articleId);
            response.json({
                data: article
            });
        } catch (error) {
            next(error);
        }
    },

    async getArticlesByActivityId(request, response, next) {
        try {
            const { activityId } = request.params;
            const activity = await activityDataMapper.getActivityById(activityId);
            if (! activity) {
                response.locals.notFound = "activity";
                next();
                return;
            };
            const articleList = await articleDataMapper.getArticlesByActivityID(activityId);
            response.json({
                data: articleList
            });
        } catch (error) {
            next(error);
        }
    },

    async createArticle(request, response, next) {
        try {
            const newArticle = request.body;
            const article = await articleDataMapper.createArticle(newArticle);
            response.json({
                data: article
            });
        } catch (error) {
            next(error);
        }
    },

    // ajout d'une image dans l'article: à faire
    async addArticleImage(request, response, next) {
        try {

        } catch (error) {
            next(error);
        }
    },

    async updateArticle(request, response, next) {
        try {
            const { articleId } = request.params;
            const articleInfo = request.body;

            const article = await articleDataMapper.updateArticle(articleId);

            response.json({
                data: article
            })
        } catch (error) {
            next(error);
        }
    },

    async deleteArticle(request, response, next) {
        try {
            const { articleId } = request.params;
            const article = await articleDataMapper.deleteArticle(articleId);
            response.json({
                data: article
            })
        } catch (error) {
            next(error);
        }
    },
}