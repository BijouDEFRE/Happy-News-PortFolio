BEGIN;

DROP TABLE IF EXISTS "article", "user", "role", "activity";

CREATE TABLE "role" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "role_name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW (),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW ()
);

CREATE TABLE "activity" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "activity_name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW (),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW ()
);

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "zip_code" INT NOT NULL,
    "city" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL UNIQUE,
    "company_name" TEXT UNIQUE,
    "shop_name" TEXT UNIQUE,
    "registration_number" INT UNIQUE,
    "role_id" INT NOT NULL REFERENCES "role" ("id"),
    "activity_id" INT NOT NULL REFERENCES "activity" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW (),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW ()
);

CREATE TABLE "article" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "article_title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "picture_url" TEXT NOT NULL,
    "price" INT NOT NULL,
    "is_news" BOOLEAN NOT NULL,
    "user_id" INT NOT NULL REFERENCES "user" ("id"),
    "activity_id" INT NOT NULL REFERENCES "activity" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW ()
);

COMMIT;