-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors_books;

CREATE TABLE authors (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  full_name VARCHAR,
  dob VARCHAR,
  pob VARCHAR
);

CREATE TABLE books (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR,
  released VARCHAR
);

INSERT INTO authors (
  full_name,
  dob,
  pob
)

VALUES 
  ('JRR Tolkien','01-03-1892','South Africa'),
  ('Steven King','09-21-1947','Maine');

INSERT INTO books (
  title,
  released
)

VALUES
  ('The Fellowship of the Ring','1954'),
  ('The Two Towers','1954'),
  ('The Return of the King','1955'),
  ('It','1986'),
  ('The Green Mile','1996'),
  ('The Shining','1977');

CREATE TABLE authors_books(
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  author_id BIGINT,
  book_id BIGINT,
  FOREIGN KEY (author_id) REFERENCES authors(id),
  FOREIGN KEY (book_id) REFERENCES books(id)
);

INSERT INTO 
  authors_books (author_id, book_id)
  VALUES
    (1,1),
    (1,2),
    (1,3),
    (2,4),
    (2,5),
    (2,6);
