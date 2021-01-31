-- Revert happynews:25-insertions-datas-activity from pg

BEGIN;

ALTER TABLE "activity" DROP COLUMN "content";

COMMIT;
