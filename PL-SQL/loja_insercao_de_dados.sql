CREATE TABLE tb_funcionarios(
id_funcionario          INTEGER,
id_gerente              INTEGER,
nome                    VARCHAR2(10) NOT NULL,
sobrenome               VARCHAR2(10)NOT NULL,
cargo                   VARCHAR2(20),
salario                 NUMBER(8,2),
fg_ativo                INTEGER,
CONSTRAINT pk_tb_funcionarios_id_func PRIMARY KEY(id_funcionario),
CONSTRAINT fk_tb_funcionarios_id_gerente FOREIGN KEY(id_gerente)
    REFERENCES tb_funcionarios(id_funcionario)
);


CREATE TABLE tb_grades_salarios(
id_salario          INTEGER,
base_salario        NUMBER(8,2),
teto_salario        NUMBER(8,2),
fg_ativo            INTEGER,
CONSTRAINT pk_tb_grades_salarios_id_salario PRIMARY KEY(id_salario)
);


DESCRIBE tb_clientes;
--------------------------------------------
-- Identifica as colunas definidas com NOT NULL
--Nome          Nulo?    Tipo         
------------- -------- ------------ 
--ID_CLIENTE    NOT NULL NUMBER(38)   
--NOME          NOT NULL VARCHAR2(10) 
--SOBRENOME     NOT NULL VARCHAR2(10) 
--DT_NASCIMENTO          DATE         
--TELEFONE               VARCHAR2(12) 
--FG_ATIVO               NUMBER(38)   
-----------------------------------------------------

INSERT INTO tb_clientes(id_cliente, nome, sobrenome, dt_nascimento, telefone, fg_ativo)
VALUES(1, 'John', 'Brown', '01/Jan/1965', '800-555-1211',1);

INSERT INTO tb_clientes(id_cliente, nome, sobrenome, dt_nascimento, telefone, fg_ativo)
VALUES(2, 'Cynthia', 'Green', '05/Fev/1968', '800-555-1211',1);

INSERT INTO tb_clientes
VALUES(3,'Steve', 'White', '16/Mar/1971', '800-555-1213',1);

INSERT INTO tb_clientes(id_cliente, nome, sobrenome, dt_nascimento, telefone, fg_ativo)
VALUES(4, 'Gail', 'Black', '', '800-555-1214',1);
--AQUI APENAS COLOCAMOS A "STRING" VAZIA PARA INDICAR QUE ESTÁ NULO

INSERT INTO tb_clientes(id_cliente, nome, sobrenome, dt_nascimento, telefone, fg_ativo)
VALUES(5, 'Doreen', 'Blue', '20/Mai/1970', NULL,1);
--AQUI ESPECIFICAMOS O NULL NO TELEFONE

INSERT INTO tb_clientes(id_cliente, nome, sobrenome, dt_nascimento, telefone, fg_ativo)
VALUES(6, 'Fred', 'Brown', '01/Jan/1970', '800-555-1215',1);

COMMIT;
-- SEMPRE COMMITAR AS MUDANÇAS REALIZADAS NO BANCO


SELECT *
FROM tb_clientes;
-- SELECIONA TODOS DE CLIENTES


------------------------ REALIZANDO CARGA EM TIPOS PRODUTOS------------------------------
DESCRIBE tb_tipos_produtos;

INSERT INTO tb_tipos_produtos(id_tipo_produto,nm_tipo_produto, fg_ativo)
VALUES(1,'Book',1);

INSERT INTO tb_tipos_produtos(id_tipo_produto,nm_tipo_produto, fg_ativo)
VALUES(2,'Video',1);

INSERT INTO tb_tipos_produtos(id_tipo_produto,nm_tipo_produto, fg_ativo)
VALUES(3,'DVD',1);

INSERT INTO tb_tipos_produtos(id_tipo_produto,nm_tipo_produto, fg_ativo)
VALUES(4,'CD',1);

INSERT INTO tb_tipos_produtos(id_tipo_produto,nm_tipo_produto, fg_ativo)
VALUES(5,'Magazine',1);

COMMIT;

SELECT *
FROM tb_tipos_produtos;

-----------------------------REALIZANDO A CARGA DA TABELA PRODUTOS------------------------
DESCRIBE tb_produtos;

INSERT INTO tb_produtos(id_produtos, id_tipo_produto, nm_produto, ds_produto, preco, fg_ativo)
VALUES(1,1,'Modern Science', 'A description of modern science', 19.95,1);

INSERT INTO tb_produtos(id_produtos, id_tipo_produto, nm_produto, ds_produto, preco, fg_ativo)
VALUES(2,1,'Chemistry', 'Introduction of chemistry', 30,1);

INSERT INTO tb_produtos(id_produtos, id_tipo_produto, nm_produto, ds_produto, preco, fg_ativo)
VALUES(3,2,'Supernova', 'A star explodes', 25.99,1);

INSERT INTO tb_produtos(id_produtos, id_tipo_produto, nm_produto, ds_produto, preco, fg_ativo)
VALUES(4,2,'Tank War', 'Action movie about a future', 13.95,1);

COMMIT;
--------------------------REALIZANDO CARGA NA TABELA COMPRAS------------------------------
DESCRIBE tb_compras;

INSERT INTO tb_compras(id_cliente, id_produto, quantidade, fg_ativo)
VALUES(1,1,1,1);

INSERT INTO tb_compras(id_cliente, id_produto, quantidade, fg_ativo)
VALUES(2,1,3,1);

INSERT INTO tb_compras(id_cliente, id_produto, quantidade, fg_ativo)
VALUES(1,4,1,1);

INSERT INTO tb_compras(id_cliente, id_produto, quantidade, fg_ativo)
VALUES(2,2,1,1);

INSERT INTO tb_compras(id_cliente, id_produto, quantidade, fg_ativo)
VALUES(1,3,1,1);

COMMIT;

-----------------------------CARGA NA TABELA FUNCIONARIOS----------------------------

DESCRIBE tb_funcionarios;

INSERT INTO tb_funcionarios(id_funcionario, id_gerente, nome, sobrenome, cargo, salario, fg_ativo)
VALUES(1,NULL,'James', 'Smith', 'CEO', 8000.00,1);

INSERT INTO tb_funcionarios(id_funcionario, id_gerente, nome, sobrenome, cargo, salario, fg_ativo)
VALUES(2,1,'Ron', 'Johnson', 'Sales Manager', 6000.00,1);

INSERT INTO tb_funcionarios(id_funcionario, id_gerente, nome, sobrenome, cargo, salario, fg_ativo)
VALUES(3,2,'Fred', 'Hobbs', 'Salesperson', 1500.00,1);

INSERT INTO tb_funcionarios(id_funcionario, id_gerente, nome, sobrenome, cargo, salario, fg_ativo)
VALUES(4,2,'Susan', 'Jones', 'Salesperson', 5000.00,1);

COMMIT;

