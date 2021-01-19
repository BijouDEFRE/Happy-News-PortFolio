-- Deploy ocolis:20-package_serial_as_text to pg

BEGIN;
-- Changement de type pour la colonne
ALTER TABLE package
      ALTER serial_number TYPE TEXT;

-- /!\ Ici je change un type de INT vers TEXT, même s'il y a des données
-- cette opération ce passe bien de manière générale
-- L'inverse par exemple pourrait être bloqué (si autre chose que des représentation de nombre)
-- C'est pour que même si les choses peuvent évoluer, il faut bien réfléchir dès le départ
-- à ses types de données.

-- Si je ne l'ai pas push je peux modifier mon dernier commit (pour par exemple
-- renommer un fichier).
-- Je dois "add" les modfications et faire "git commit --ammend" (avec -m "...")
COMMIT;
