-- Deploy happynews:23-insertions-datas to pg

BEGIN;

INSERT INTO "article" ("article_title", "description", "picture_url", "price", "is_news", "user_id", "activity_id") VALUES
('Lot de 10 cahiers', 'Lot de cahiers sans lignes', '', 10, true, 2, 9),
('Hot Saucisses', 'Chapelet de 10 saucisses au piment', '', 9, true, 3, 5),
('Planche apéro gourmand', 'Votre pack apéro des gourmands pour 8 à 10 personnes comprend :
- 1 sachet de lomo
- 1 sachet de coppa
- 1 saucisson sec fermier médaillé de bronze au Salon de L''Agriculture 2019
- 1 saucisse sèche au piment d''Espelette
- 1 boîte de pâté de campagne médaillé de bronze au Salon de L''Agriculture 2020
- 1 boîte de chichon', '', 27.5, true, 3, 5);

COMMIT;
