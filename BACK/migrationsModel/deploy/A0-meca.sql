-- Deploy ocolis:A0-meca to pg

BEGIN;

CREATE TABLE vehicle (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    mileage_purchase POSITIVE_INT NOT NULL,
    brand TEXT NOT NULL,
    model TEXT NOT NULL,
    plate VEHICLE_PLATE NOT NULL UNIQUE
);

CREATE INDEX vehicle_plate_index ON vehicle(plate);

ALTER TABLE expedition
        ADD vehicle_id INT REFERENCES vehicle(id);

ALTER TABLE expedition DROP vehicle_plate;

COMMIT;
