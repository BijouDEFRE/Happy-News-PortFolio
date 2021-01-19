-- Revert ocolis:40-volume_detail from pg

BEGIN;

ALTER TABLE package
     RENAME height TO volume;

ALTER TABLE package
        DROP width,
        DROP depth;

COMMIT;
