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

    async getArticlesByActivityName(request, response, next) {
        try {
            const { activityName } = request.params;
            const articleByactivity = await activityDataMapper.getActivityByName(activityName);
            if (! articleByactivity == null) {
                response.locals.notFound = "Activity not exist";
                next();
                return;
            };
            const articleList = await articleDataMapper.getArticlesByActivity(activityName);
            response.json({
                data: articleList
            });
            console.log(articleList)
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
            // je cherche l'id de l'article
            const articleImage = request.savedArticleImage;
            const { articleId } = request.params;
            console.log(id);
            const article = await articleDataMapper.imageUpload(articleImage, articleId);

            response.json({
                message: "Image upload succesfull",
                data: article
            })
        } catch (error) {
            next(error);
        }
    },

    async updateArticleById(request, response, next) {
        try {
            const { articleId } = request.params;
            const articleUpdate = request.body;
            const article = await articleDataMapper.updateArticleById(articleId, articleUpdate);

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