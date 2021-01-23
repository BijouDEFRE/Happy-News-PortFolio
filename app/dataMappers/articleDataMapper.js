/*
Article Data Mapper
*/
const client = require('./client');

module.exports = {

    async getAllArticles() {
        const result = await client.query('SELECT * FROM article');
        // query with JOIN on activity tables
        // const result = await client.query('SELECT * FROM article JOIN activity ON article.activity_id = activity.id');
        // query with JOIN on user and activity tables
        const result = await client.query('SELECT * FROM article JOIN "user" ON user_id ="user"."id" JOIN activity ON article.activity_id = activity.id');
        return result.rows;
    },

    async getArticleById(articleId) {
        const result = await client.query('SELECT * FROM "article" WHERE id = $1', [articleId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    async getArticlesByActivity(activityId) {
        console.log(activityId);
        const result = await client.query('SELECT * FROM "article" WHERE "activity_id" = $1', [activityId]);
        console.log(result);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows
    },

    async createArticle(newArticle) {
        const result = await client.query(`INSERT INTO "article"("article_title", "description", "picture_url", "price", "is_news", "user_id", "activity_id")
        VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [
            newArticle.article_title,
            newArticle.description,
            newArticle.picture_url,
            newArticle.price,
            newArticle.is_news,
            newArticle.user_id,
            newArticle.activity_id
     ]);
return result.rows[0];
    },

    async addArticleImage() {

    },

    async updateArticle() {

    },

    async deleteArticle(articleId) {
        const result = await client.query('DELETE FROM article WHERE id = $1', [articleId]);
    }
}