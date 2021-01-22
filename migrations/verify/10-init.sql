-- Verify happynews:init on pg

BEGIN;

-- Je renseigne en premier les rôles
INSERT INTO "role" ("role_name")
VALUES
('commerçant'),
('client');
-- Je veux insérer un nouveau "user" de type "client" sans renseigner les champs réservés aux commerçants avec un password=fredo
INSERT INTO "user" ("first_name", "last_name", "adress", "zip_code", "city", "email", "password", "role_id") 
VALUES ('Frederic', 'Creuseveau', '11 allée des Tilleuls', 87220, 'Boisseuil', 'fredericcreuseveau@gmail.com', '$2y$10$1mrnOcGytzowU1QTZweD7eZo5rYk8xVbqUqpa9JJofQ8sP3xSDEQO', 2);

ROLLBACK;
