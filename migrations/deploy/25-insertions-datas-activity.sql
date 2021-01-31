-- Deploy happynews:25-insertions-datas-activity to pg

BEGIN;

ALTER TABLE "activity" ADD COLUMN "content" TEXT;

COMMIT;
