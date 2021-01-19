-- Revert ocolis:80-domain from pg

BEGIN;

ALTER TABLE package
      ALTER worth TYPE INT,
      ALTER width TYPE INT,
      ALTER height TYPE INT,
      ALTER depth TYPE INT,
      ALTER weight TYPE FLOAT;

   ALTER TABLE package
ADD CONSTRAINT worth_gt_0 CHECK(worth > 0),
ADD CONSTRAINT width_gt_0 CHECK(width > 0),
ADD CONSTRAINT height_gt_0 CHECK(height > 0),
ADD CONSTRAINT depth_gt_0 CHECK(depth > 0),
ADD CONSTRAINT weight_gt_0 CHECK(weight > 0);

DROP DOMAIN POSITIVE_INT;
DROP DOMAIN POSITIVE_FLOAT;




COMMIT;
