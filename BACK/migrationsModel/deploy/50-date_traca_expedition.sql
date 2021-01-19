-- Deploy ocolis:50-date_traca_expedition to pg

BEGIN;

ALTER TABLE package
        ADD request_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
        ADD expedition_time TIMESTAMPTZ,
        ADD delivered_time TIMESTAMPTZ;

-- TIMESTAMPTZ est un alias de TIMESTAMP WITH TIME ZONE
-- L'instruction DEFAULT est rétroactive, cette valeur sera mise en place
-- pour les lignes déjà existante dans la BDD


COMMIT;
