-- Deploy ocolis:90-domain_regex to pg

BEGIN;

CREATE DOMAIN POSTAL_CODE AS TEXT CHECK(VALUE ~ '^(0[1-9]\d{3}|[1-9][0-5]\d{3}|[1-8]\d{4}|99\d{3}|97[1-8]\d{2}|98[12346789]\d{2})$');
CREATE DOMAIN VEHICLE_PLATE AS TEXT CHECK(
    VALUE ~ '^[A-HJ-NP-TV-Z]{2}-?\d{3}-?[A-Z]{2}$' AND
    VALUE !~ '^(SS|WW)' AND
    VALUE !~ 'SS$');

ALTER TABLE place
ALTER postal_code TYPE POSTAL_CODE;

ALTER TABLE expedition
ALTER vehicle_plate TYPE VEHICLE_PLATE;
COMMIT;
