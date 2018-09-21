INSERT INTO professor VALUES
(0, "Administrador", "MASTER", "MASTER", "2018-12-09", "adm@adm.com", "$2a$10$X607ZPhQ4EgGNaYKt3n4SONjIv9zc.VMWdEuhCuba7oLAL5IvcL5.", "MASTER", "MASTER" );

INSERT INTO materia VALUES("Java");
INSERT INTO materia VALUES("PHP");
INSERT INTO materia VALUES("JavaScript");
INSERT INTO materia VALUES("Typescript");
INSERT INTO materia VALUES("Angular");
INSERT INTO materia VALUES("Spring");
INSERT INTO materia VALUES("React");
INSERT INTO materia VALUES("MySql");
INSERT INTO materia VALUES("C++");

INSERT INTO permissao (codigo, descricao) values (1, 'ROLE_LISTAR_ALUNOS');
INSERT INTO permissao (codigo, descricao) values (2, 'ROLE_LISTAR_ALUNO');
INSERT INTO permissao (codigo, descricao) values (3, 'ROLE_SALVAR_ALUNO');
INSERT INTO permissao (codigo, descricao) values (4, 'ROLE_DELETAR_ALUNO');
INSERT INTO permissao (codigo, descricao) values (5, 'ROLE_EDITAR_ALUNO');

INSERT INTO permissao (codigo, descricao) values (6, 'ROLE_LISTAR_FALTAS');
INSERT INTO permissao (codigo, descricao) values (7, 'ROLE_SALVAR_FALTA');
INSERT INTO permissao (codigo, descricao) values (8, 'ROLE_DELETAR_FALTA');

INSERT INTO permissao (codigo, descricao) values (9, 'ROLE_LISTAR_NOTAS');
INSERT INTO permissao (codigo, descricao) values (10, 'ROLE_SALVAR_NOTA');
INSERT INTO permissao (codigo, descricao) values (11, 'ROLE_DELETAR_NOTA');
INSERT INTO permissao (codigo, descricao) values (12, 'ROLE_EDITAR_NOTA');

INSERT INTO permissao (codigo, descricao) values (13, 'ROLE_LISTAR_PROFESSORES');
INSERT INTO permissao (codigo, descricao) values (14, 'ROLE_LISTAR_PROFESSOR');
INSERT INTO permissao (codigo, descricao) values (15, 'ROLE_SALVAR_PROFESSOR');
INSERT INTO permissao (codigo, descricao) values (16, 'ROLE_DELETAR_PROFESSOR');
INSERT INTO permissao (codigo, descricao) values (17, 'ROLE_EDITAR_PROFESSOR');

INSERT INTO permissao (codigo, descricao) values (18, 'ROLE_EDITAR_FALTA');


-- professor
INSERT INTO professor_permissao(codigo_professor,codigo_permissao) VALUES
(1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),(1,11),(1,12),(1,13),(1,14),(1,15),(1,16),(1,17),(1,18);


