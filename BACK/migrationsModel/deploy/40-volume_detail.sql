-- Deploy ocolis:40-volume_detail to pg

BEGIN;

ALTER TABLE package
     RENAME volume TO height;

ALTER TABLE package
        ADD width INT NOT NULL DEFAULT 1,
        ADD depth INT NOT NULL DEFAULT 1;

COMMIT;
