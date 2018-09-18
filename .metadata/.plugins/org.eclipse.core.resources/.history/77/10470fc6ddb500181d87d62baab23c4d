CREATE TABLE aluno(
	matricula BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	sobrenome VARCHAR(50) NOT NULL,
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
	disciplina VARCHAR(50) NOT NULL,
	login VARCHAR(50) NOT NULL,
	senha VARCHAR(50) NOT NULL,
	nascimento DATE NOT NULL,
	email VARCHAR(100),
	telefone VARCHAR(50),
	imagem VARCHAR(255)
);


CREATE TABLE materia(
	materia VARCHAR(50) PRIMARY KEY
);


CREATE TABLE bimestre(
	bimestre BIGINT(2) PRIMARY KEY
);


CREATE TABLE notas(
	materia VARCHAR(50),
	bimestre BIGINT(2),
	nota DOUBLE(2,2),
	FOREIGN KEY(materia) REFERENCES materia(materia),
	FOREIGN KEY(bimestre) REFERENCES bimestre(bimestre),
	PRIMARY KEY(materia,bimestre)
);


CREATE TABLE faltas(
	materia VARCHAR(50),
	bimestre BIGINT(2),
	aluno BIGINT(20),
	numero BIGINT(20),
	FOREIGN KEY(materia) REFERENCES materia(materia),
	FOREIGN KEY(bimestre) REFERENCES bimestre(bimestre),
	FOREIGN KEY(aluno) REFERENCES aluno(matricula),
	PRIMARY KEY(materia,bimestre,aluno)
);


INSERT INTO aluno VALUES
(0,"Victor","Magalhães","victor","123","2001-01-29","victormagalhaessales@gmail.com","(85)988400644","c://imagems/ae.png"),
(0,"Yara","Santana","victor","123","2001-05-23","victormagalhaessales@gmail.com","(85)988400644","c://imagems/ae.png"),
(0,"Lucas","Sousa","Sousa","123","2001-10-15","victormagalhaessales@gmail.com","(85)988400644","c://imagems/ae.png");

INSERT INTO professor VALUES
(0,"Edy","vidal","Biologia","asd","asd","2001-01-01","asdasdad","asdad","asdasd"),
(0,"Kelmy","Carmurça","Português","login","senha","2001-01-01","asdasdad","asdad","asdasd"),
(0,"Jhonnys","Sousa","Física","login","senha","2001-01-01","asdasdad","asdad","asdasd");

INSERT INTO materia VALUES
("Português),
("Matemática"),
("História"),
("Geografia"),
("Física"),
("Química"),
("Filosofia"),
("Sociologia"),
("Literatura"),
("Redação");

INSERT INTO bimestre VALUES (1),(2),(3),(4);

ALTER DATABASE aluno CHARSET = UTF8 COLLATE = utf8_general_ci;
ALTER DATABASE `professor` CHARSET = UTF8 COLLATE = utf8_general_ci;
ALTER DATABASE `materia` CHARSET = UTF8 COLLATE = utf8_general_ci;
ALTER DATABASE `bimestre` CHARSET = UTF8 COLLATE = utf8_general_ci;
ALTER DATABASE `faltas` CHARSET = UTF8 COLLATE = utf8_general_ci;
ALTER DATABASE `notas` CHARSET = UTF8 COLLATE = utf8_general_ci;