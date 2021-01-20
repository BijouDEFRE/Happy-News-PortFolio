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
('Micheline', 'Dupont', '4 rue de la Prefecture', 87160, 'Arnac la poste', 'micheline@laposte.fr', 'mdp', 'le papier sarl', 'paper plane', 85247087300017, 1, 9),
('Mario', 'Rossi', '0 place de la porchetta', 87380, 'La porcherie', 'mrossi@hotpot.fr', 'mdp1', 'le cochon eurl', 'Tout est bon dans le cochon', 31447087300017, 1, 5);

INSERT INTO "article" ("article_title", "description", "picture_url", "price", "is_news", "user_id", "activity_id") VALUES
('Lot de 10 cahiers', 'Lot de cahiers sans lignes', '', 10, true, 1, 9),
('Hot Saucisses', 'Chapelet de 10 saucisses au piment', '', 9, true, 1, 5);

COMMIT;