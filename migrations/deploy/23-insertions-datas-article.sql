-- Deploy happynews:23-insertions-datas to pg

BEGIN;

INSERT INTO "article" ("article_title", "description", "picture_url", "price", "is_news", "user_id", "activity_id") VALUES
('Lot de 10 cahiers', 'Lot de cahiers sans lignes', 'https://images-na.ssl-images-amazon.com/images/I/91mkG5zMMEL._AC_SX425_.jpg', 10, true, 2, 9),
('Hot Saucisses', 'Chapelet de 10 saucisses au piment', 'https://cdn.shopify.com/s/files/1/0311/0155/0723/collections/AdobeStock_300900031_1200x1200.jpg?v=1586443110', 9, true, 3, 5),
('Planche apéro gourmand', 'Votre pack apéro des gourmands pour 8 à 10 personnes comprend :
- 1 sachet de lomo
- 1 sachet de coppa
- 1 saucisson sec fermier médaillé de bronze au Salon de L''Agriculture 2019
- 1 saucisse sèche au piment d''Espelette
- 1 boîte de pâté de campagne médaillé de bronze au Salon de L''Agriculture 2020
- 1 boîte de chichon', 'https://s2.dmcdn.net/v/8ksul1VysdHGaYl6E/x1080', 27.5, true, 3, 5),
('viande de boeuf à fondue', 'Sélection des meilleures viandes du Limousin, pièces choisies: rumsteak, rond de tranche, poire, merlan', 'https://assets.afcdn.com/recipe/20170626/69853_w1024h576c1cx3194cy1957.jpg', 13, true, 3, 2),
('Bouquet 40 roses + cadeau surprise', 'Pour chaque bouquet de 40 roses un cadeau surprise', 'https://cdn.pixabay.com/photo/2015/03/26/09/41/roses-690085_960_720.jpg', 30, true, 5, 3);

COMMIT;
