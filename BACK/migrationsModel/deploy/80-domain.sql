-- Deploy ocolis:80-domain to pg

BEGIN;

-- Je créé des "domain" (des types personalisé)
CREATE DOMAIN POSITIVE_INT AS INT CHECK (VALUE > 0);
CREATE DOMAIN POSITIVE_FLOAT AS FLOAT CHECK (VALUE > 0);

-- Je supprime les contraintes qui peuvent être factorisé
   ALTER TABLE package
DROP CONSTRAINT worth_gt_0,
DROP CONSTRAINT width_gt_0,
DROP CONSTRAINT height_gt_0,
DROP CONSTRAINT depth_gt_0,
DROP CONSTRAINT weight_gt_0;

-- Je viens mettre en place mon DOMAIN
ALTER TABLE package
      ALTER worth TYPE POSITIVE_INT,
      ALTER width TYPE POSITIVE_INT,
      ALTER height TYPE POSITIVE_INT,
      ALTER depth TYPE POSITIVE_INT,
      ALTER weight TYPE POSITIVE_FLOAT;

COMMIT;
