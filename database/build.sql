BEGIN;
DROP TABLE IF EXISTS memes CASCADE;

CREATE TABLE memes (
id SERIAL PRIMARY KEY,
url VARCHAR(200) NOT NULL,
tags VARCHAR(100) NOT NULL
);


INSERT INTO memes (url,tags) VALUES
('http://quotesnhumor.com/wp-content/uploads/2015/09/Top-40-Funniest-Minions-Memes-funny.jpg','minion woman');



COMMIT;
