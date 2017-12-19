BEGIN;
DROP TABLE IF EXISTS memes CASCADE;

CREATE TABLE memes (
id SERIAL PRIMARY KEY,
url VARCHAR(200) NOT NULL,
auth VARCHAR(100) NOT NULL
);


INSERT INTO memes (url,auth) VALUES
('http://quotesnhumor.com/wp-content/uploads/2015/09/Top-40-Funniest-Minions-Memes-funny.jpg','mhmd');

DROP TABLE IF EXISTS tags CASCADE;

CREATE TABLE tags (
id SERIAL,
meme_id INTEGER REFERENCEs memes ,
tag VARCHAR(100) NOT NULL,
PRIMARY KEY (id, meme_id)
);

INSERT INTO tags (meme_id, tag) VALUES
(1, 'minion woman');


DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
password VARCHAR(200) NOT NULL

);

INSERT INTO users (name, password) VALUES
('mhmd', '123456');

COMMIT;
