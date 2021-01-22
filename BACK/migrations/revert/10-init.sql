-- Revert happynews:init from pg

BEGIN;

DROP TABLE "article";
DROP TABLE "user";
DROP TABLE "activity";
DROP TABLE "role";

COMMIT;
