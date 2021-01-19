-- Deploy ocolis:D0-views to pg

BEGIN;

-- Créer une vue
-- Qui donne pour chaque package
-- L'adresse de sont expéditeur
--           de sont destinataire
--           le nom du chauffer et la plaque du vehicule s'il est livré
CREATE VIEW package_detail AS
SELECT package.*,
       recipient_place.name AS recipient_name,
       recipient_place.address AS recipient_address,
       recipient_place.additional AS recipient_additional,
       recipient_place.postal_code AS recipient_postal_code,
       recipient_place.city AS recipient_city,
       sender_place.name AS sender_name,
       sender_place.address AS sender_address,
       sender_place.additional AS sender_additional,
       sender_place.postal_code AS sender_postal_code,
       sender_place.city AS sender_city,
       expedition.driver_name,
       mechanic.vehicle.plate
  FROM package
  JOIN place recipient_place
    ON recipient_place.id = package.recipient_id
  JOIN accounting.bill
    ON accounting.bill.id = package.bill_id
  JOIN place sender_place
    ON sender_place.id = accounting.bill.client_id
-- On aura pas forcément une éxpédition pour chaque package
-- (les lignes d'expédition sont créé quand le camion "part")
-- Si je veux quand même avoir tt mes package je dois un OUTER JOIN au lieu d'un
-- [INNER] JOIN
-- LEFT veut dire "Je veux toutes les lignes AVANT le JOIN
-- même si celles qui viennent après sont NULL
LEFT OUTER JOIN expedition
    ON expedition.id = package.expedition_id
  JOIN mechanic.vehicle
    ON mechanic.vehicle.id = expedition.vehicle_id
;

COMMIT;
