-- Deploy happynews:22-insertions-datas to pg

BEGIN;

INSERT INTO "user" ("first_name", "last_name", "adress", "zip_code", "city", "email", "password", "company_name", "shop_name", "registration_number", "role_id", "activity_id") 
VALUES
('Micheline', 'Dupont', '4 rue de la Prefecture', 87160, 'Arnac la poste', 'micheline@laposte.fr', '$2y$10$K9J5tX4De974BpyXTbWs8Ox186iaPmTz7u8rg7Ug5eO4jVarQf4Q2', 'le papier sarl', 'paper plane', 85247087300017, 3, 9),
('Mario', 'Rossi', '0 place de la porchetta', 87380, 'La porcherie', 'mrossi@hotpot.fr', '$2y$10$QWFN2BIWrJH.xIKBMqrfeesKRXRJNEYhSUhWuBee7II8UBlhoaY8y', 'le cochon eurl', 'Tout est bon dans le cochon', 31447087300017, 3, 5),
('Jean', 'Bon', '33 rue Marechal Legoinfre', 72110, 'Bonnetable', 'jambon@deparme.fr', '$2y$10$EbVw52rmlnmhuxTD2nUMPOtnP4PJc6UhR5ig3.iqi87jzzZF0UxR6', 'jeanbon eurl', 'Le palais gourmand', 25846278514445, 3, 2);

COMMIT;
