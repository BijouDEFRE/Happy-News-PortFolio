-- Revert happynews:20-insertions-datas from pg

BEGIN;

TRUNCATE TABLE "role"
RESTART IDENTITY CASCADE;

COMMIT;
