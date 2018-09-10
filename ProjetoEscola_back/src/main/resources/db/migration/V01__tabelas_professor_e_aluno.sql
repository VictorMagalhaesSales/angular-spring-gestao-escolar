CREATE TABLE aluno(
	matricula BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	sobrenome VARCHAR(50) NOT NULL,
	curso VARCHAR(50) NOT NULL,
	login VARCHAR(50) NOT NULL,
	senha VARCHAR(50) NOT NULL,
	nascimento DATE NOT NULL,
	email VARCHAR(100),
	telefone VARCHAR(50),
	imagem VARCHAR(255)
);  ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE professor(
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	sobrenome VARCHAR(50) NOT NULL,
	login VARCHAR(50) NOT NULL,
	senha VARCHAR(50) NOT NULL,
	nascimento DATE NOT NULL,
	email VARCHAR(100),
	telefone VARCHAR(50),
	imagem VARCHAR(255)
	
);  ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO aluno VALUES (0,"Victor","Magalhães","Informática");