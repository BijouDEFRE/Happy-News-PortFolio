module.exports = {
    async getActivityByName(activityName) {
        // if activity doesn't exist, return null
        const existActivity = await client.query('SELECT * FROM "activity" WHERE activity_name = $1', [activityName]);

        if (existActivity.rowCount === 0 ){
            return null ;
        }
        const result = await client.query(`SELECT activity.activity_name AS activity, article.*
                                            FROM article 
                                            JOIN aricle ON article.article_id = article.id 
                                            JOIN activity ON activity.activity_name = activity_name.activity_id
                                            WHERE activity.activity_name = $1`, [activityName]);
    
        // console.log(categoryId);
        // console.log(result.rows);
        return result.rows;
    },

}

SELECT activity.activity_name AS activity, article.* FROM article WHERE activity_name = 'boulangerie';

SELECT article.* FROM article JOIN activity ON activity_name = activity.activity_name JOIN "user" ON user_id = "user"."id"

SELECT article.* FROM article JOIN activity ON article.article_id = article.id WHERE activity_name = 'boulangerie'`, [id]

SELECT * FROM article WHERE activity_name = 'boulangerie';

SELECT * FROM article JOIN activity.activity_name ON activity WHERE activity_name = 'boulangerie';

const client = require('./client');


const client = require('./client');

const localisationDataMapper = {
    async getLocalisationByTrip(tripId) {
        const result = await client.query(`SELECT "country" FROM "localisation" LEFT OUTER JOIN "_m2m_trip_localisation" tl ON tl.localisation_id = localisation.id WHERE tl.trip_id = $1`, [tripId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    }
};

module.exports = localisationDataMapper;

SELECT "article_title" FROM "article" JOIN "activity" ON activity.activity_name = activity_name WHERE activity_name = 'boulangerie';

SELECT * FROM "article" JOIN "activity" ON activity.activity_name = activity_name WHERE activity_name = 'boulangerie';

SELECT article_title, description, picture_url, price, is_news , activity_name FROM "article" JOIN "activity" ON activity.activity_name = activity_name WHERE activity_name = 'boulangerie';

(`SELECT article_title, description, picture_url, price, is_news , activity_name FROM "article" JOIN "activity" ON activity.activity_name = activity_name WHERE activity_name = $1`, [activityName]);

SELECT activity.activity_name FROM "activity" JOIN "article" ON article.article_title = article_title WHERE article.arrticle_id = 1;

SELECT article_title, description, picture_url, price, is_news , activity_name FROM "article" JOIN "activity" ON activity.activity_name = activity_name;

SELECT article.id, "article_title", "description", "picture_url", "price", "is_news", "news_duration", article.activity_id, "activity_name", "user_id", "first_name", "last_name", "shop_name", "city" FROM article GROUP BY "activity_name" ORDER BY "activity_name" JOIN activity ON activity_id = activity.id JOIN "user" ON user_id ="user"."id";

SELECT *
    FROM article INNER JOIN activity ON (activity.activity_name = activity_name);

SELECT article.id, article_title, activity.id, activity_name FROM article LEFT JOIN activity ON article.id = activity.id;

SELECT * FROM article JOIN activity ON article.id = activity.id;

SELECT * FROM activity JOIN article ON activity.id = article.id;


SELECT article.id, "article_title", "description", "picture_url", "price", "is_news", "news_duration", article.activity_id, "activity_name", "user_id", "shop_name", "city"  FROM article JOIN activity ON activity_id = activity.id JOIN "user" ON user_id ="user"."id"

SELECT article.id, "article_title", "description", "picture_url", "price", "is_news", "news_duration", article.activity_id, "activity_name", "user_id", "shop_name", "city"
FROM article JOIN activity ON activity_name = activity.activity_name JOIN "user" ON user_id ="user"."id";

SELECT article.id, "article_title", "description", "picture_url", "price", "is_news", "news_duration", article.activity_id, "activity_name", "user_id", "shop_name", "city"
FROM article JOIN activity ON activity_id = activity.id JOIN "user" ON user_id ="user"."id";

BEGIN;

CREATE OR REPLACE FUNCTION trigger_set_timestamp() 
RETURNS TRIGGER AS $$ 
BEGIN 
  NEW.updated_at = NOW(); 
  RETURN NEW; 
  END; 
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp 
BEFORE UPDATE ON "user" 
FOR EACH ROW 
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp 
BEFORE UPDATE ON "product" 
FOR EACH ROW 
EXECUTE PROCEDURE trigger_set_timestamp();

COMMIT;

INSERT INTO "article" ("article_title", "description", "picture_url", "price", "is_news", "user_id", "activity_id") VALUES
('Lot de 10 cahiers', 'Lot de cahiers sans lignes', 'https://images-na.ssl-images-amazon.com/images/I/91mkG5zMMEL._AC_SX425_.jpg', 10, true, 5, 9),
('Hot Saucisses', 'Chapelet de 10 saucisses au piment', 'https://cdn.shopify.com/s/files/1/0311/0155/0723/collections/AdobeStock_300900031_1200x1200.jpg?v=1586443110', 9, true, 6, 5),
('Planche apéro gourmand', 'Votre pack apéro des gourmands pour 8 à 10 personnes comprend :
- 1 sachet de lomo
- 1 sachet de coppa
- 1 saucisson sec fermier médaillé de bronze au Salon de L''Agriculture 2019
- 1 saucisse sèche au piment d''Espelette
- 1 boîte de pâté de campagne médaillé de bronze au Salon de L''Agriculture 2020
- 1 boîte de chichon', 'https://s2.dmcdn.net/v/8ksul1VysdHGaYl6E/x1080', 27.5, true, 7, 5),
('viande de boeuf à fondue', 'Sélection des meilleures viandes du Limousin, pièces choisies: rumsteak, rond de tranche, poire, merlan', 'https://assets.afcdn.com/recipe/20170626/69853_w1024h576c1cx3194cy1957.jpg', 13, true, 6, 2),
('Bouquet 40 roses + cadeau surprise', 'Pour chaque bouquet de 40 roses un cadeau surprise', 'https://cdn.pixabay.com/photo/2015/03/26/09/41/roses-690085_960_720.jpg', 30, true, 8, 3);