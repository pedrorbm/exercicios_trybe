USE sakila;

DROP TABLE IF EXISTS filme;

CREATE TABLE filme (
  filme_id INT PRIMARY KEY AUTO_INCREMENT,
  descricao VARCHAR(100) NOT NULL,
  ano_lancamento INT NOT NULL,
  nota INT
);
