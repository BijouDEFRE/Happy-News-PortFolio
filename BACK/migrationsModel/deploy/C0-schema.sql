-- Deploy ocolis:B0-schema to pg

BEGIN;

CREATE SCHEMA accounting;
CREATE SCHEMA mechanic;

ALTER TABLE bill
    SET SCHEMA accounting;

ALTER TABLE vehicle
    SET SCHEMA mechanic;




COMMIT;
