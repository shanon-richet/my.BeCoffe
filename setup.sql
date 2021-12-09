ALTER TABLE users
ALTER COLUMN id TYPE uuid DEFAULT uuid_generate_v4 ();