-- INSER��O NA TABELA GRADES_SALARIOS

DESCRIBE tb_grades_salarios;

INSERT INTO tb_grades_salarios(id_salario, base_salario, teto_salario, fg_ativo)
VALUES(1,1,2500.00,1);

INSERT INTO tb_grades_salarios(id_salario, base_salario, teto_salario, fg_ativo)
VALUES(2,2500.01,5000.00,1);
------------------------------------------------------

INSERT INTO tb_grades_salarios(id_salario, base_salario, teto_salario, fg_ativo)
VALUES(3,5000.01,7500.00,1);

INSERT INTO tb_grades_salarios(id_salario, base_salario, teto_salario, fg_ativo)
VALUES(4,7500.01,9999.99,1);

COMMIT;
-- COMMIT PARA GRAVAR NO DISCO

SELECT *
FROM tb_grades_salarios;
--mostrando os dados na tabela

-----------------------------------------------------------------------------
-- UPDATE SEM WHERE ALTERA TODAS AS TUPLAS

UPDATE tb_clientes
SET sobrenome = 'Orange'
WHERE id_cliente = 2;

SELECT * 
FROM tb_clientes;

ROLLBACK
--------------------------------------------
-- DELETE SEM WHERE, TOMASTE NO BURACO A NN SER QUE VC DE ROLLBACK ANTES DE COMMITAR

--DELETE
--FROM{NOME DA TABELA}
--WHERE {CONDI��O}

DELETE
FROM tb_clientes
WHERE id_clientes = 2;
-- n�o deixa deletar o pai se tiver um filho para nn dar erro
-- RA-02292: restri��o de integridade (LOJA.FK_TB_COMPRAS_ID_CLIENTE) violada - registro filho localizado

----------------------------------------------------------------

-- CRIANDO UMA PROCEDURE PARA OBTER INFORMA��O

CREATE OR REPLACE PROCEDURE get_cliente(p_id_cliente IN tb_clientes.id_cliente%TYPE)
AS
 v_nome         tb_clientes.nome%TYPE;
 v_sobrenome    tb_clientes.sobrenome%TYPE;
 v_controle     INTEGER;
BEGIN
 SELECT COUNT(1) INTO v_controle
 FROM tb_clientes
 WHERE id_cliente = p_id_cliente;
 
 IF (v_controle = 1) THEN
   SELECT nome, sobrenome INTO v_nome, v_sobrenome
   FROM tb_clientes
   WHERE id_cliente = p_id_cliente;
   
   DBMS_OUTPUT.PUT_LINE('Cliente localizado: ' || v_nome || ' ' || v_sobrenome);
 ELSE
   DBMS_OUTPUT.PUT_LINE('Cliente N�O localizado');   
 END IF;
 
EXCEPTION 
  WHEN others THEN
    DBMS_OUTPUT.PUT_LINE('Erro!!!'); 
END get_cliente;

-- Invocando o objeto "get_cliente" por meio da sa�da DBMS OUTPUT
-- Menu: Exibir > Sa�da Dbms
CALL get_cliente(1);

CALL get_cliente(90);

-- Invocando o objeto "get_cliente" por meio de um bloco an�nimo
SET serveroutput ON
BEGIN
  get_cliente(3);
END;

SET serveroutput ON
BEGIN
  get_cliente(99);
END;


--INSERTS
INSERT INTO tb_funcionarios (id_funcionario, id_gerente, nome, sobrenome, cargo, salario, fg_ativo) 
VALUES (5, 2, 'Rob', 'Green', 'Sales Person', 400000, 1);

INSERT INTO tb_funcionarios (id_funcionario, id_gerente, nome, sobrenome, cargo, salario, fg_ativo) 
VALUES (6, 4, 'Jane', 'Brown', 'Support Person', 450000, 1);

INSERT INTO tb_funcionarios (id_funcionario, id_gerente, nome, sobrenome, cargo, salario, fg_ativo) 
VALUES (7, 4, 'John', 'Grey', 'Support Manager', 300000, 1);

INSERT INTO tb_funcionarios (id_funcionario, id_gerente, nome, sobrenome, cargo, salario, fg_ativo) 
VALUES (8, 7, 'Jean', 'Blue', 'Support Person', 290000, 1);

INSERT INTO tb_funcionarios (id_funcionario, id_gerente, nome, sobrenome, cargo, salario, fg_ativo)  
VALUES (9, 6, 'Henry', 'Heyson', 'Support Person', 300000, 1);

INSERT INTO tb_funcionarios (id_funcionario, id_gerente, nome, sobrenome, cargo, salario, fg_ativo)  
VALUES (10, 1, 'Kevin', 'Black', 'Ops Manager', 100000, 1);

INSERT INTO tb_funcionarios (id_funcionario, id_gerente, nome, sobrenome, cargo, salario, fg_ativo)  
VALUES (11, 10, 'Keith', 'Long', 'Ops Person', 500000, 1);

INSERT INTO tb_funcionarios (id_funcionario, id_gerente, nome, sobrenome, cargo, salario, fg_ativo)  
VALUES (12, 10, 'Frank', 'Howard', 'Ops Person', 450000, 1);

INSERT INTO tb_funcionarios (id_funcionario, id_gerente, nome, sobrenome, cargo, salario, fg_ativo)  
VALUES (13, 10, 'Doreen', 'Penn', 'Ops Person', 470000, 1);

-- commit the transaction
COMMIT;

--------------------------------------------------------------------------------
INSERT INTO tb_produtos (id_produtos, id_tipo_produto, nm_produto, ds_produto, preco, fg_ativo) 
VALUES (6, 2, 'Z Files', 'Series on mysterious activities', 49.99, 1);

INSERT INTO tb_produtos (id_produtos, id_tipo_produto, nm_produto, ds_produto, preco, fg_ativo) 
VALUES (7, 2, '2412: The Return', 'Aliens return', 14.95, 1);

INSERT INTO tb_produtos (id_produtos, id_tipo_produto, nm_produto, ds_produto, preco, fg_ativo)
VALUES (8, 3, 'Space Force 9', 'Adventures of heroes', 13.49, 1);

INSERT INTO tb_produtos (id_produtos, id_tipo_produto, nm_produto, ds_produto, preco, fg_ativo) 
VALUES (9, 3, 'From Another Planet', 'Alien from another planet lands on Earth', 12.99, 1);

INSERT INTO tb_produtos (id_produtos, id_tipo_produto, nm_produto, ds_produto, preco, fg_ativo)
VALUES (10, 4, 'Classical Music', 'The best classical music', 10.99, 1);

INSERT INTO tb_produtos (id_produtos, id_tipo_produto, nm_produto, ds_produto, preco, fg_ativo) 
VALUES (11, 4, 'Pop 3', 'The best popular music', 15.99, 1);

INSERT INTO tb_produtos (id_produtos, id_tipo_produto, nm_produto, ds_produto, preco, fg_ativo) 
VALUES (12, 4, 'Creative Yell', 'Debut album', 14.99, 1);

INSERT INTO tb_produtos (id_produtos, id_tipo_produto, nm_produto, ds_produto, preco, fg_ativo) 
VALUES (13, NULL, 'My Front Line', 'Their greatest hits', 13.49, 1);

-- commit the transaction
COMMIT;
--------------------------------------------------------------------------------------------

CREATE TABLE tb_promocao (
  id_promocao        INTEGER CONSTRAINT pk_promocao PRIMARY KEY,
  nome               VARCHAR2(30) NOT NULL,
  duracao            INTERVAL DAY(3) TO SECOND (4)
);

INSERT INTO tb_promocao (id_promocao, nome, duracao)
VALUES 
(1, '10% off Z Files', INTERVAL '3' DAY);
INSERT INTO tb_promocao (id_promocao, nome, duracao)
VALUES 
(2, '20% off Pop 3', INTERVAL '2' HOUR);
INSERT INTO tb_promocao (id_promocao, nome, duracao)
VALUES 
(3, '30% off Modern Science', INTERVAL '25' MINUTE);
INSERT INTO tb_promocao (id_promocao, nome, duracao)
VALUES 
(4, '20% off Tank War', INTERVAL '45' SECOND);
INSERT INTO tb_promocao (id_promocao, nome, duracao)
VALUES 
(5, '10% off Chemistry', INTERVAL '3 2:25' DAY TO MINUTE);
INSERT INTO tb_promocao (id_promocao, nome, duracao)
VALUES 
(6, '20% off Creative Yell', INTERVAL '3 2:25:45' DAY TO SECOND);
INSERT INTO tb_promocao (id_promocao, nome, duracao)
VALUES 
(7, '15% off My Front Line', INTERVAL '123 2:25:45.12' DAY(3) TO SECOND(2));
COMMIT;
------------------------------------------------------------------------------------

SELECT id_cliente, nome, sobrenome, dt_nascimento, telefone
FROM tb_clientes;

SELECT *
FROM tb_clientes;
-- Raramente se usa o * pois seleciona todas as colunas das tabelas, e acaba sendo sobrecarregado de dados

SELECT * 
FROM tb_clientes
WHERE id_cliente = 2;

-- TODO SGBD TEM O ENDERE�O FISICO DE CADA LINHA
--ROWID (RECUPERA TUPLA DE FORMA MAIS RAPIDA, VBASICAMENTE UM ID DO PROPRIO SGBD)
-- 18 DIGITOS

SELECT ROWID, id_cliente
FROM tb_clientes;
-- Sa�da:
--AAASqyAAPAAAAcUAAB	2
--AAASqyAAPAAAAcUAAC	3
--AAASqyAAPAAAAcUAAD	4
--AAASqyAAPAAAAcUAAF	5
--AAASqyAAPAAAAcUAAE	6