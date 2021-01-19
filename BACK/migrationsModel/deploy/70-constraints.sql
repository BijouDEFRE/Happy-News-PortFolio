-- Deploy ocolis:70-constraints to pg

BEGIN;

-- Nos volumes doivent faire moins d'un mètre cube
   ALTER TABLE package
ADD CONSTRAINT volume_max CHECK(height * width * depth < 1000000);
-- On donne un nom au contraintes pour pouvoir les retrouver / modifier / supprimer facilement
-- Ensutie on écrit dans le CHECK le cas OÙ ça marche !

   ALTER TABLE expedition
ADD CONSTRAINT end_after_start CHECK(starting_time < ending_time);

-- (gt est une abréviation pour greater than, plus grand que)
   ALTER TABLE package
ADD CONSTRAINT worth_gt_0 CHECK(worth > 0),
ADD CONSTRAINT width_gt_0 CHECK(width > 0),
ADD CONSTRAINT height_gt_0 CHECK(height > 0),
ADD CONSTRAINT depth_gt_0 CHECK(depth > 0),
ADD CONSTRAINT weight_gt_0 CHECK(weight > 0);

   ALTER TABLE package
ADD CONSTRAINT no_drug CHECK(content_description NOT ILIKE '%drug%');

COMMIT;
