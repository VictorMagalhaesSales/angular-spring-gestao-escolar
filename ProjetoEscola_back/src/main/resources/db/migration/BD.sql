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
);

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
);


INSERT INTO aluno VALUES (0,"Victor","Magalhães","Informática","victor","123","2001-01-29","victormagalhaessales@gmail.com","(85)988400644","c://imagems/ae.png");
INSERT INTO professor VALUES(0,"Edy","vidal","asd","asd","2001-01-01","asdasdad","asdad","asdasd");