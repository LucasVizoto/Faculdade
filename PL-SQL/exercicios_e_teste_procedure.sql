--realizando a chamada de teste 4

@ C:/temp/teste_4.sql 6 19
--quando voc� coloca os valores ele chama usando aquilo de param(mais de um precisa separar por espa�o)

SELECT 'DROP TABLE '||table_name||';'
FROM user_tables;
-- retorna, os "camandos" escritos (l�gico, pq eu conscatenei ksksks)

CREATE TABLE tb_teste(
id      INTEGER,
valor   VARCHAR2(100));

--BLOCO ANONIMO � O BEGIN 
BEGIN
    FOR v_loop IN 1..100000 LOOP
        INSERT INTO tb_teste(id, valor)
        VALUES(v_loop, 'DBA_'||v_loop);
    END LOOP;
END;

SELECT *
FROM tb_teste
ORDER BY 1 DESC; 

--REMOVE TUDO DA TABELA (D� UM DROP E DEPOIS CREATE)
--TRUNCATE � DDL, NN PERMITE ROLLBACK (FORMA MAIS RAPIDA DE DELETAR)
--DELETE � DML 
TRUNCATE TABLE tb_teste;


------------------------------------------------------------------------
-- Criar um CRUD via store procedure
-- na procedure temos IN e OUT, indicando entrada e saida dos dados da tabela
CREATE TABLE tb_cliente_teste(
id_cliente          INTEGER,
ds_cliente          VARCHAR2(40),
nm_cliente          VARCHAR2(40),
valor               NUMERIC,
fg_ativo            INTEGER,
PRIMARY KEY(id_cliente)
);

-- gerando a procedure
CREATE OR REPLACE PROCEDURE manipula_dados(
p_id_cliente IN tb_cliente_teste.id_cliente%TYPE,
p_descricao  IN tb_cliente_teste.ds_cliente%TYPE,
p_nome       IN tb_cliente_teste.nm_cliente%TYPE,
p_valor      IN tb_cliente_teste.valor%TYPE,
p_fg_ativo   IN tb_cliente_teste.fg_ativo%TYPE,
p_opcao      IN CHAR)

AS
v_controle      INTEGER;

BEGIN

--verifica a exist�ncia de tuplas na tb_cliente_teste
SELECT COUNT(*)INTO v_controle
FROM tb_cliente_teste
WHERE id_cliente = p_id_cliente
AND fg_ativo =1;

--op��o = I (INSERT)
IF (p_opcao='I') THEN
    IF(v_controle!=1) THEN
        INSERT INTO tb_cliente_teste(id_cliente, 
                                     ds_cliente, 
                                     nm_cliente,
                                     valor,
                                     fg_ativo)
        VALUES(p_id_cliente, p_descricao, p_nome, p_valor, p_fg_ativo);
        COMMIT;
        
        dbms_output.put_line('Cliente inserido com sucesso');
        
    ELSE
        dbms_output.put_line('ID cliente j� existe');
    END IF;
END IF;

--opcao U (UPDATE)
IF (p_opcao = 'U')THEN
    IF(v_controle = 1) THEN
        UPDATE tb_cliente_teste SET ds_cliente = p_descricao,
                                    nm_cliente = p_nome,
                                    valor = p_valor,
                                    fg_ativo = p_fg_ativo
        WHERE id_cliente = p_id_cliente
        AND fg_ativo = 1;
        
        COMMIT;
        dbms_output.put_line('Cliente alterado com sucesso');
    ELSE
    dbms_output.put_line('ID do cliente n�o existe');
    END IF;
END IF;

--Op��o D (DELETE)
IF (p_opcao = 'D') THEN
    IF(v_controle = 1) THEN
        DELETE
        FROM tb_cliente_teste
        WHERE id_cliente = p_id_cliente
        AND fg_ativo = 1;
        
        COMMIT;
        
        dbms_output.put_line('Cliente excluido com sucesso');
    
    ELSE
        dbms_output.put_line('ID do cliente n�o existe');
    END IF;
END IF;

EXCEPTION 
    WHEN OTHERS THEN
        ROLLBACK;
END manipula_dados;

------------------------------------------------------------------------

CALL manipula_dados(1, 'Cliente 1', 'Nome do cliente 1', 22, 1, 'I');

-- opcao inserir (par�metro opcao = I)
CALL manipula_dados(2, 'Cliente 2', 'Nome do cliente 2', 99, 1, 'I');


-- opcao alterar (par�metro opcao = U)
CALL manipula_dados(2, 'Cliente alterado hoje', 'Alterado', 110, 1, 'U');

-- opcao excluir (par�metro opcao = D)
CALL manipula_dados(2, NULL, NULL, NULL, NULL, 'D');
