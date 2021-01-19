
DROP TABLE IF EXISTS name, adjective, verb, complement, cadex;

CREATE TABLE name (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label TEXT NOT NULL UNIQUE
);

CREATE TABLE adjective (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label TEXT NOT NULL UNIQUE
);

CREATE TABLE verb (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label TEXT NOT NULL UNIQUE
);

CREATE TABLE complement (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label TEXT NOT NULL UNIQUE
);

CREATE TABLE cadex (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    correction TEXT,
    note INT DEFAULT 0,
    name_id INT NOT NULL REFERENCES name(id),
    adjective_id INT NOT NULL REFERENCES adjective(id),
    verb_id INT NOT NULL REFERENCES verb(id),
    complement_id INT NOT NULL REFERENCES complement(id)
);

INSERT INTO name(label) VALUES ('Bruce-Lee'), ('Jean-Claude'), ('Chuck-Norris');
INSERT INTO adjective(label) VALUES ('ringard'), ('beau'), ('magnifique');
INSERT INTO verb(label) VALUES ('sautent'), ('se fight'), ('déglingue');
INSERT INTO complement(label) VALUES ('dans la rue'), ('à la rue'), ('complétement dingue');