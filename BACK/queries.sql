-- Test ocolis_r2.sql => ocolis_r3.sql --
INSERT INTO package(serial_number, content_description, weight, volume, worth)
   VALUES
   (1, '200 flûtes traversières', 5, 154200, 42);

INSERT INTO package(serial_number, content_description, weight, volume, worth)
   VALUES
   (2, '1 cactus', 0.5, 780, 42);

INSERT INTO package(serial_number, content_description, weight, volume, worth)
   VALUES
   (3, '1 écran HD 42 pouces', 12, 2975, 42);

SELECT content_description, volume FROM package;

-- Test ocolis_r4.sql --
SELECT content_description, height, width, depth FROM package;

-- Test ocolis_r5.sql --
INSERT INTO package(serial_number, content_description, weight, height, width, depth, worth)
   VALUES
   (4, '12 étudiants o''clock', 840, 12000, 1, 1.70, 0);

SELECT serial_number, content_description, request_time FROM package;

SELECT serial_number, content_description, weight, height, request_time FROM package;

SELECT serial_number, content_description, weight, height, request_time, width, depth, worth FROM package;

-- Modifier le poid dans le champ dont serial_number = 4
UPDATE package SET weight = '840.5' WHERE weight = '840';

-- Renseigner un ZIP Français et un Numéro de plaque
INSERT INTO place(postal_code) VALUE (87220);
INSERT INTO place(postal_code) VALUE (87 220);
INSERT INTO place(postal_code) VALUE (FR87000);
INSERT INTO place(postal_code) VALUE (HAUTE-VIENNE);

INSERT INTO expedition(vehicle_plate) VALUE (AC-613-ET);
INSERT INTO expedition(vehicle_plate) VALUE (AC613ET);
INSERT INTO expedition(vehicle_plate) VALUE (AC-z13-ET);
INSERT INTO expedition(vehicle_plate) VALUE (W-312-KE);


-- Deploy ocolis:60-add_table to pg

BEGIN;

-- Création d'une table livraison
CREATE TABLE delivery (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    driver_name TEXT NOT NULL,
    vehicle_plate TEXT NOT NULL,
    starting_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    ending_time TIMESTAMPTZ
);

-- Ajout de la clé étrangère livraison dans la table colis
-- ALTER TABLE package ADD FOREIGN KEY(delivery_id) REFERENCES delivery(id);
ALTER TABLE package ADD COLUMN delivery_id INT REFERENCES delivery(id);

-- Import des expéditions de la table colis vers la table livraison
INSERT INTO delivery (starting_time, driver_name, vehicle_plate)
SELECT DISTINCT expedition_time, 'charlie', '123-AA-234'
FROM package
WHERE expedition_time IS NOT NULL;

-- On va renseigner le champ delivery_id dans la table package
-- pour les colis précédemment livrés 
UPDATE package SET delivery_id = delivery.id
FROM delivery
WHERE delivery.starting_time = package.expedition_time;

-- Suppression de la colonne expédition_time de la table colis
ALTER TABLE package DROP COLUMN expedition_time;

COMMIT;
