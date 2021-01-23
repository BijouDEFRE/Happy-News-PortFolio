-- Deploy happynews:21-insertions-datas to pg

BEGIN;

INSERT INTO "activity" ("activity_name") VALUES
('boulangerie'),
('boucherie'),
('fleuriste'),
('fromagerie'),
('charcuterie'),
('garagiste'),
('primeur'),
('coiffeur'),
('papeterie');

COMMIT;
