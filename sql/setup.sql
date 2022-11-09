-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS authors;

CREATE TABLE authors (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  full_name VARCHAR,
  dob VARCHAR,
  pob VARCHAR
);

INSERT INTO authors (
  full_name,
  dob,
  pob
)
VALUES 
  ('JRR Tolkien','01-03-1892','South Africa'),
  ('Steven King','09-21-1947','Maine')
;