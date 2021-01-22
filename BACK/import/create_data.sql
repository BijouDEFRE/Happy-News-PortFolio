BEGIN;

INSERT INTO "role" ("role_name") VALUES
('commerçant'),
('client');

INSERT INTO "activity" ("activity_name") VALUES
('boulangerie'),
('boucherie'),
('fleuriste'),
('fromagerie'),
('charcuterie'),
('garagiste'),
('primeur'),
('coiffeur'),
('papeterie');

INSERT INTO "user" ("first_name", "last_name", "adress", "zip_code", "city", "email", "password", "company_name", "shop_name", "registration_number", "role_id", "activity_id") 
VALUES
('Micheline', 'Dupont', '4 rue de la Prefecture', 87160, 'Arnac la poste', 'micheline@laposte.fr', '$2y$10$K9J5tX4De974BpyXTbWs8Ox186iaPmTz7u8rg7Ug5eO4jVarQf4Q2', 'le papier sarl', 'paper plane', 85247087300017, 1, 9),
            ('Mario', 'Rossi', '0 place de la porchetta', 87380, 'La porcherie', 'mrossi@hotpot.fr', '$2y$10$QWFN2BIWrJH.xIKBMqrfeesKRXRJNEYhSUhWuBee7II8UBlhoaY8y', 'le cochon eurl', 'Tout est bon dans le cochon', 31447087300017, 1, 5),
            ('Jean', 'Bon', '33 rue Marechal Legoinfre', 72110, 'Bonnetable', 'jambon@deparme.fr', '$2y$10$EbVw52rmlnmhuxTD2nUMPOtnP4PJc6UhR5ig3.iqi87jzzZF0UxR6', 'jeanbon eurl', 'Le palais gourmand', 25846278514445, 1, 2);

INSERT INTO "article" ("article_title", "description", "picture_url", "price", "is_news", "user_id", "activity_id") VALUES
('Lot de 10 cahiers', 'Lot de cahiers sans lignes', '', 10, true, 1, 9),
('Hot Saucisses', 'Chapelet de 10 saucisses au piment', '', 9, true, 2, 5),
('Planche apéro gourmand', 'Votre pack apéro des gourmands pour 8 à 10 personnes comprend :
- 1 sachet de lomo
- 1 sachet de coppa
- 1 saucisson sec fermier médaillé de bronze au Salon de L''Agriculture 2019
- 1 saucisse sèche au piment d''Espelette
- 1 boîte de pâté de campagne médaillé de bronze au Salon de L''Agriculture 2020
- 1 boîte de chichon', '', 27.5, true, 2, 5);
 
COMMIT;