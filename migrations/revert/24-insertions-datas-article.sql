-- Revert happynews:24-insertions-datas-article from pg

BEGIN;

ALTER TABLE "article" DROP COLUMN "news_duration";

COMMIT;
