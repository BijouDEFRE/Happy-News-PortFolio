/*
Article Data Mapper
*/
const client = require('./client');

module.exports = {

    async getAllArticles() {
        // const result = await client.query('SELECT * FROM article');
        // query with JOIN on activity tables
        // const result = await client.query('SELECT * FROM article JOIN activity ON article.activity_id = activity.id');
        // query with JOIN on user and activity tables
        const result = await client.query('SELECT article.id, "article_title", "description", "picture_url", "price", "is_news", "news_duration", article.activity_id, "activity_name", "user_id", "first_name", "last_name", "shop_name", "city", "latitude", "longitude" FROM article JOIN activity ON activity_id = activity.id JOIN "user" ON user_id ="user"."id"');
        return result.rows;
    },

    async getArticleById(articleId) {
        const result = await client.query('SELECT * FROM "article" WHERE id = $1', [articleId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    async getArticlesByActivityID(activityId) {

        const result = await client.query('SELECT * FROM "article" WHERE "activity_id" = $1', [activityId]);
        return result.rows;
    },

    async getArticlesByActivity() {

        const result = await client.query(`SELECT article.id, "article_title", "description", "picture_url", "price", "is_news", "news_duration", article.activity_id, "activity_name", "user_id", "shop_name", "city"
        FROM article JOIN activity ON activity_id = activity.id JOIN "user" ON user_id ="user"."id";`);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async createArticle(newArticle) {

        const result = await client.query(`INSERT INTO "article"("article_title", "description", "picture_url", "price", "is_news", "user_id", "activity_id", "news_duration")
        VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
        [
            newArticle.article_title,
            newArticle.description,
            newArticle.picture_url,
            newArticle.price,
            newArticle.is_news,
            newArticle.user_id,
            newArticle.activity_id,
            newArticle.news_duration
        ]);
        return result.rows[0];
    },

    async imageUpload(articleImage, articleId) { 
        const result = await client.query(`UPDATE "article" SET picture_url = $1 WHERE id = $2 RETURNING *`, [articleImage, articleId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.row[0];
    },

    async updateArticleById(articleId, articleUpdate) {

        const updateArticle = await client.query(`UPDATE "article" SET "article_title" =$1, "description" = $2,
         "picture_url" = $3, "price" = $4, "is_news" = $5, "news_duration" = $6, "activity_id" = $7,
         "user_id" = $8 WHERE id = $9 RETURNING *`,
        [
            articleUpdate.article_title,
            articleUpdate.description,
            articleUpdate.picture_url, 
            articleUpdate.price,
            articleUpdate.is_news,
            articleUpdate.news_duration,
            articleUpdate.activity_id,
            // articleUpdate.updated_at = new Date(),
            articleUpdate.user_id,
            articleId       
        ]);
        return updateArticle.rowCount;
    },

    async deleteArticleById(articleId) {
        const findArticle = await client.query('SELECT * FROM "article" WHERE id = $1', [articleId]);

        if (findArticle.rowCount == 0) {
            return null;
        }
        const deleteArticle = client.query('DELETE FROM "article" WHERE id = $1', [articleId]);

        return deleteArticle.rowCount;
    },
}