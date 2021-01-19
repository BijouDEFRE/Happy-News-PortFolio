-- Revert ocolis:D0-views from pg

BEGIN;

DROP VIEW package_detail;

COMMIT;
