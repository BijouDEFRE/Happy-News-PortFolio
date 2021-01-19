-- Revert ocolis:B0-factu from pg

BEGIN;

ALTER TABLE package ADD sender_id INT NOT NULL REFERENCES place("id");

ALTER TABLE package DROP bill_id;

DROP TABLE bill;

COMMIT;
