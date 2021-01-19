-- Revert ocolis:60-expedition from pg

BEGIN;

ALTER TABLE package
        ADD expedition_time TIMESTAMPTZ;

UPDATE package SET expedition_time = (
    SELECT starting_time
      FROM expedition
     WHERE package.expedition_id = expedition.id
);

ALTER TABLE package
        DROP expedition_id;

DROP TABLE expedition;

COMMIT;
