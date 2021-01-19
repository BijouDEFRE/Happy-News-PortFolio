-- Deploy ocolis:B0-factu to pg

BEGIN;

CREATE TABLE bill (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "amount" NUMERIC(7, 2) NOT NULL, -- NUMBER pour les nombre à virgule
    -- Le premier chiffre représente le nombre de digit MAx (123,45 => 5 digit)
    -- Le second représente le nombre de chiffre après la virgule
    "reference" TEXT NOT NULL UNIQUE CHECK("reference" ~ '^\d{4}-\d+$'),
    -- Les numéros de factures suivent toujours le même format dans une entreprise
    -- ici on a imaginé un format : année_facturation-num_facture
    "client_id" INT NOT NULL REFERENCES place("id")
);

CREATE INDEX bill_reference ON bill("reference");

ALTER TABLE package
        ADD "bill_id" INT NOT NULL REFERENCES bill("id");

ALTER TABLE package DROP sender_id;

COMMIT;
