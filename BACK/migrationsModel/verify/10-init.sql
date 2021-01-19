-- Verify ocolis:init on pg

BEGIN;

-- je vérifie que je peux insérer une adresse sans préciser de complément d'adresse
INSERT INTO place(reference, name, address, postal_code, city)
     VALUES ('AAAAA', 'Maxime RAYNAL', 'Avenue du 8 Mai', 12000, 'Rodez');

ROLLBACK;
