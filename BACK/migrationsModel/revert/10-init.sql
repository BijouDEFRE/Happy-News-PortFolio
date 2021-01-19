BEGIN;

-- On doit d'abord supprimer package avant de supprimer place.
-- En effet package contient des références vers la table place
-- Donc si je supprime d'abord place les références dans packages ne seront plus valide
-- et pg me renverra une erreur.

DROP TABLE package;
DROP TABLE place;

COMMIT;
