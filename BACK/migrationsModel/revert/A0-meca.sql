-- Revert ocolis:A0-meca from pg

BEGIN;


ALTER TABLE expedition
        DROP vehicle_id;

ALTER TABLE expedition
        ADD vehicle_plate VEHICLE_PLATE NOT NULL UNIQUE;

DROP TABLE vehicle;

COMMIT;
