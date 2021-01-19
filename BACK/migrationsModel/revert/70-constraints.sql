-- Revert ocolis:70-constraints from pg

BEGIN;

ALTER TABLE package DROP CONSTRAINT volume_max;

ALTER TABLE expedition DROP CONSTRAINT end_after_start;

   ALTER TABLE package
DROP CONSTRAINT worth_gt_0,
DROP CONSTRAINT width_gt_0,
DROP CONSTRAINT height_gt_0,
DROP CONSTRAINT depth_gt_0,
DROP CONSTRAINT weight_gt_0;

   ALTER TABLE package
DROP CONSTRAINT no_drug;

COMMIT;
