-- Verify happynews:24-insertions-datas-article on pg

BEGIN;

SELECT "news_duration" FROM "article";

ROLLBACK;
