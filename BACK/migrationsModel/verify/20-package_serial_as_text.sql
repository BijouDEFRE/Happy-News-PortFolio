-- Verify ocolis:20-package_serial_as_text on pg

BEGIN;

INSERT INTO package(serial_number , content_description , weight , volume , worth)
     VALUES ('TOTOT', '', 42, 42, 42);

ROLLBACK;
