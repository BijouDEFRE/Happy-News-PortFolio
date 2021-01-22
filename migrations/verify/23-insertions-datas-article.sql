-- Verify happynews:23-insertions-datas on pg

BEGIN;

--- Je veux vérifier si mes infos sont présentent
SELECT * FROM "article" WHERE "activity_id" = 1;

ROLLBACK;
