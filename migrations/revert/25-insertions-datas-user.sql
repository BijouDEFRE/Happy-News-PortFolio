-- Revert happynews:25-insertions-datas-activity from pg

BEGIN;

ALTER TABLE "user" DROP COLUMN "content";

COMMIT;
