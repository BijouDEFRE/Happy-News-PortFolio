-- Revert happynews:23-insertions-datas from pg

BEGIN;

TRUNCATE TABLE "article"
RESTART IDENTITY CASCADE;

COMMIT;
