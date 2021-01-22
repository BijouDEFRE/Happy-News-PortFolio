-- Revert happynews:21-insertions-datas from pg

BEGIN;

TRUNCATE TABLE "activity"
RESTART IDENTITY CASCADE;

COMMIT;
