-- Deploy happynews:24-insertions-datas-article to pg

BEGIN;

ALTER TABLE "article" ADD COLUMN "news_duration" INT DEFAULT 1;

COMMIT;
