-- Verify happynews:22-insertions-datas on pg

BEGIN;

--- Je veux vérifier si mes infos sont présentent
SELECT * FROM "user" WHERE id = 1;

ROLLBACK;
