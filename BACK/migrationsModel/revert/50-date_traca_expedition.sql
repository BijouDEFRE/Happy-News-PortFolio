-- Revert ocolis:50-date_traca_expedition from pg

BEGIN;

ALTER TABLE package
        DROP request_time,
        DROP expedition_time,
        DROP delivered_time;
COMMIT;
