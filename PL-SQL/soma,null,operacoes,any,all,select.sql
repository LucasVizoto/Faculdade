SELECT ROWNUM id_cliente, nome, sobrenome
FROM tb_clientes
WHERE id_cliente = 2

-------------------------------------------------------------
-- realiza opera��es aritm�ticas com separa��o de prioridade para multipliq e divis�o
SELECT 2*6
FROM dual


SELECT 10*12/3-1
FROM dual

-- se quiser quebrar a ordem, s� usar par�nteses
SELECT 10*(12/3-1)
FROM dual


-- CONSEGUE SOMAR DIAS NAS DATAS PASSADAS, NO CASO FOI SOMADO DOIS DIAS
SELECT TO_DATE('22/JUN/2014')+2
FROM DUAL

-- retorna o intervalo de dias entre um adata e outra
SELECT TO_DATE('31/DEZ/2014')-TO_DATE('22/JUN/2014')
FROM dual

--nm_produto, preco original, preco+2reais
-- RETORNA VALORES ALTERADOS SOMANDO O VALOR PASSDO
SELECT nm_produto, preco, preco+2
FROM tb_produtos

-- TABELA DUAL POSSUI UMA UNICA LINHA DE VALOR X
DESCRIBE dual;

SELECT *
FROM dual;
-- x 


------------------------------------------------------------------------
--USANDO ALIAS(NOMES ALTERNATIVOS, MUDAR SEU CABE�ALHO)
-- basicamente coloca um nome em vari�vel
SELECT preco,preco*2 DOBRO_PRE�O
FROM tb_produtos;

-- caso queria manter o seu case, colocar entre aspas
SELECT preco, preco*2 "Dobro do Pre�o"
FROM tb_produtos

-- pode-se colocar com AS, embora o sgbd j� coloque ela automaticamente
SELECT preco,preco*2 AS "Dobro do Pre�o"
FROM tb_produtos;

--------------------------------------------------------------------------------
--CONCATENA��O, CRIA��O DE UMA SA�DA MAIS AMIG�VEL
-- REPRESENTADO POR ||
SELECT nome||' '||sobrenome AS "Nome do Cliente"
FROM tb_clientes;
--------------------------------------------------------------------------------
-- EXERCICIO:
-- Gostaria de exibir um relatorio em forma de :
'Salario dos Sonhos'
'O funcionario Geraldo Henrique recebe R$1500,00, mas gostaria de recebem R$4500,00'
SELECT *
FROM tb_funcionarios;

SELECT 'O funcionario '||nome||' '||sobrenome|| ' recebe R$'||salario||', mas gostaria de receber R$'||salario*3 AS "Salario dos Sonhos"
FROM tb_funcionarios;
--------------------------------------------------------------------------------

-- valores null s�o o calcanhar de aquiles, ent�o tome cuidado
-- Representado por (null), se estiver sem parenteses n�o � null
SELECT *
FROM tb_clientes

-- SELECIONA O UNICO QUE TEM NULL
SELECT id_cliente, nome, sobrenome, dt_nascimento
FROM tb_clientes
WHERE dt_nascimento IS NULL


SELECT id_cliente, nome, sobrenome, telefone
FROM tb_clientes
WHERE telefone IS NULL

---- COMO DIFERENCIAR UM VALOR NULL DE UMA STRING EM BRANCO??
---- USANDO A FUN��O NVL (Aten��o pois � exclusiva do Oracle)

SELECT id_cliente, nome, sobrenome,
NVL(telefone, 'Numero do telefone desconhecido') AS N�mero_Telefone
-- NVL(Coluna, Valor_retornado)
FROM tb_clientes;
--------------
SELECT id_cliente, nome, sobrenome,
    NVL(dt_nascimento, '22/JUN/2013') AS "Data de Nascimento"
FROM tb_clientes;

--NULLIF(Express�o1, express�o2)
-- SE UM FOR IGUAL O DO OUTRO RETORNA NULO
SELECT nome, LENGTH(nome) "express�o1",
    sobrenome, LENGTH(sobrenome) "express�o2",
    NULLIF(LENGTH(nome), LENGTH(sobrenome))"Resultado"
FROM tb_funcionarios;

-- COALESCE(expressao1,expressao2,...expressaoN)
--BASICAMENTE UM NVL DE SGBDS QUE NN S�O DA ORACLE
--Express�o1 � retornada se N�O for null
--Express�o2 � retornada se a express�o1 for nula e ela N�O
-- e assim por diante

SELECT nome, sobrenome,
    COALESCE(telefone, 'Telefone inexistente!!!') "Exemplo"
FROM tb_clientes;

SELECT nome, sobrenome,
    COALESCE(dt_nascimento, TO_DATE('21/08/2024')) "Exemplo"
FROM tb_clientes;

---- DISTINCT (mascara entradas em duplicidade)
---- TOMAR CUIDADO PRA NN MASCARAR ERROS CR�NICOS

SELECT id_cliente
FROM tb_compras;

-- compara��o numerica tamb�m funcona, como os < >
SELECT *
FROM tb_clientes
WHERE id_cliente <> 2;


SELECT id_produtos, nm_produto
FROM tb_produtos
WHERE id_produtos> 2;


SELECT ROWNUM,id_produtos, nm_produto
FROM tb_produtos
WHERE ROWNUM <=3;

-- ESSE ANY FUNCIONA LITERALMENTE COMO UM "OU"
SELECT * 
FROM tb_clientes
WHERE id_cliente> ANY(2,3,4);

-- ALL seleciona os maiores depois do maior da lista passada
SELECT *
FROM tb_clientes
WHERE id_cliente > ALL (2,3,4);
