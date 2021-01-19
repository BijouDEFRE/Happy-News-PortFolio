-- Revert ocolis:90-domain_regex from pg

BEGIN;

ALTER TABLE place
ALTER postal_code TYPE INT USING (postal_code::INT);

ALTER TABLE expedition
ALTER vehicle_plate TYPE TEXT;

DROP DOMAIN POSTAL_CODE;
DROP DOMAIN VEHICLE_PLATE;

COMMIT;
