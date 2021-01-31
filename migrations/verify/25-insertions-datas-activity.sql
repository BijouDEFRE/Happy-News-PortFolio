-- Verify happynews:25-insertions-datas-activity on pg

BEGIN;

SELECT "description" FROM "content";

ROLLBACK;
