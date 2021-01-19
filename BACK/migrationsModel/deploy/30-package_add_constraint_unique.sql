-- Deploy ocolis:30-package_add_constraint_unique to pg

BEGIN;

   ALTER TABLE package
ADD CONSTRAINT serial_number_unique
        UNIQUE(serial_number);

-- Je créé une "contrainte" sur ma table (une règle de cohérence pour les données)
-- je lui donne un nom pour pouvoir la retrouver / modifier / supprimer à l'avenir
-- Pour finir je précise le contenu de cette contrainte (les valeurs des ligne de serial_number
-- doivent être différentes).
-- Attention comme pour un changement de type, les valeurs déjà éxistante doivent
-- respecter cette contrainte

COMMIT;
