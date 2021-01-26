/*
Article Data Mapper
*/
const { updateArticle } = require('../controllers/articleController');
const client = require('./client');

module.exports = {

    async getAllArticles() {
        // const result = await client.query('SELECT * FROM article');
        // query with JOIN on activity tables
        // const result = await client.query('SELECT * FROM article JOIN activity ON article.activity_id = activity.id');
        // query with JOIN on user and activity tables
        const result = await client.query('SELECT article.id, "article_title", "description", "picture_url", "price", "is_news", "news_duration", article.activity_id, "activity_name", "user_id", "first_name", "last_name", "shop_name", "city"  FROM article JOIN activity ON activity_id = activity.id JOIN "user" ON user_id ="user"."id"');
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

    async addArticleImage() { 

    },

    async updateArticleById(articleId, articleUpdate) {

        const updateUser = await client.query(`UPDATE "article" SET "article_title" =$1, "description" = $2,
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
            articleUpdate.user_id,
            articleId       
        ]);
    return updateUser.rowCount;
    },

    // async updateArticle(articleId, articleInfo) {

    //     const selectById = await client.query('SELECT * FROM "article" WHERE id = $1', [articleId]);
    //     console.log("selectById.rows", selectById.rows);

    //     let { article_title, description, picture_url, price, is_news, user_id, activity_id, news_duration } = articleInfo;
    //     console.log ("articleInfo", articleInfo);
    //     console.log ("articleId", articleId);
    //     console.log ("description", description);
    //     console.log("article_title", article_title);
    //     if (article_title = null) {
    //         console.log("je suis là")
    //         article_title = selectById.rows.article_title;
    //         console.log("article_title après", article_title);
    //     }

    //     if (description == null) {
    //         description = selectById.rows.description;
    //     }

    //     if (picture_url == null) {
    //         picture_url = selectById.rows.picture_url;
    //     }

    //     if (price == null) {
    //         price = selectById.rows.price;
    //     }

    //     if (price == null) {
    //         price = selectById.rows.price;
    //     }

    //     if (is_news == null) {
    //         is_news = selectById.rows.is_news;
    //     }

    //     if (user_id == null) {
    //         user_id = selectById.rows.user_id;
    //     }

    //     if (activity_id == null) {
    //         activity_id = selectById.rows.activity_id;
    //     }

    //     if (news_duration == null) {
    //         news_duration = selectById.rows.news_duration;
    //     }
        
    //     const result = await client.query(`UPDATE article SET "article_title" = $1, "description" = $2, "picture_url" = $3, "price" = $4, "is_news" = $5, "user_id" = $6, "activity_id" = $7, "news_duration" = $8 WHERE id = $9 RETURNING *`, 
    //     [
    //         article_title, 
    //         description, 
    //         picture_url, 
    //         price, 
    //         is_news, 
    //         user_id, 
    //         activity_id, 
    //         news_duration,
    //         articleId
    //     ]);
    //     console.table(result)
    //     return result.rowCount[0];
    // },

    async deleteArticle(articleId) {
        const result = await client.query('DELETE FROM article WHERE id = $1', [articleId]);

        return deleted.rowCount;
    }

}