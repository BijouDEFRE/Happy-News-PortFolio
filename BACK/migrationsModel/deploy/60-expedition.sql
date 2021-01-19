-- Deploy ocolis:60-expedition to pg

BEGIN;

CREATE TABLE expedition (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    driver_name TEXT NOT NULL,
    vehicle_plate TEXT NOT NULL,
    starting_time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    ending_time TIMESTAMPTZ
);

ALTER TABLE package
        ADD expedition_id INT REFERENCES expedition(id);

-- La migration de données

-- Je prend toutes les valeurs différentes de date d'éxpédition dans package
-- (je considère que si deux paquets sont partie du dépot au même instant ils étaient
-- dans le même camion)
-- Je créé autant de lignes dans expedition
INSERT INTO expedition (driver_name, vehicle_plate, starting_time)
SELECT DISTINCT 'NC', 'NC', expedition_time
  FROM package;


-- Dans l'autre sens je prends toutes mes lignes dans expedition et je viens définir
-- dans package l'expedition_id pour les packages qui ont la même date d'expedition
UPDATE package SET expedition_id = (
    SELECT id
      FROM expedition
     WHERE starting_time = package.expedition_time
);

ALTER TABLE package
       DROP expedition_time;

COMMIT;
