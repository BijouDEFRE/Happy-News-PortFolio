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
('Micheline', 'Dupont', '4 rue de la Prefecture', 87160, 'Arnac la poste', 'micheline@laposte.fr', 'mdp', 'le papier sarl', 'paper plane', 85247087300017, 1, 9);

INSERT INTO "article" ("article_title", "description", "picture_url", "price", "is_news", "user_id", "activity_id") VALUES
('Lot de 10 cahiers', 'Lot de cahiers avec du poil autour', '', 10, true, 5, 36);

COMMIT;