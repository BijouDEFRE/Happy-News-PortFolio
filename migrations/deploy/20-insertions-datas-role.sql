-- Deploy happynews:20-insertions-datas to pg

BEGIN;

INSERT INTO "role" ("role_name") VALUES
('commerçant'),
('client');

COMMIT;
