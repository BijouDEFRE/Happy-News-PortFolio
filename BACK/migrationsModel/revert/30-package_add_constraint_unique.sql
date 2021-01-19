-- Revert ocolis:30-package_add_constraint_unique from pg

BEGIN;

    ALTER TABLE package
DROP CONSTRAINT serial_number_unique;

COMMIT;
