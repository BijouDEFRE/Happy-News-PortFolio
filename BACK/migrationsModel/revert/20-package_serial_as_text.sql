-- Revert ocolis:20-package_serial_as_text from pg

BEGIN;

ALTER TABLE package
      ALTER serial_number TYPE INT;


COMMIT;
