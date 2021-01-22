-- Revert happynews:22-insertions-datas from pg

BEGIN;

TRUNCATE TABLE "user"
RESTART IDENTITY CASCADE;

COMMIT;
