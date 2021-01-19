-- Revert ocolis:B0-schema from pg

BEGIN;

ALTER TABLE accounting.bill
    SET SCHEMA public;

ALTER TABLE mechanic.vehicle
    SET SCHEMA public;


DROP SCHEMA accounting;
DROP SCHEMA mechanic;



COMMIT;
