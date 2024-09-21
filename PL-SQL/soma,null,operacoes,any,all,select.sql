SELECT ROWNUM id_cliente, nome, sobrenome
FROM tb_clientes
WHERE id_cliente = 2

-------------------------------------------------------------
-- realiza operações aritméticas com separação de prioridade para multipliq e divisão
SELECT 2*6
FROM dual


SELECT 10*12/3-1
FROM dual

-- se quiser quebrar a ordem, só usar parênteses
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
--USANDO ALIAS(NOMES ALTERNATIVOS, MUDAR SEU CABEÇALHO)
-- basicamente coloca um nome em variável
SELECT preco,preco*2 DOBRO_PREÇO
FROM tb_produtos;

-- caso queria manter o seu case, colocar entre aspas
SELECT preco, preco*2 "Dobro do Preço"
FROM tb_produtos

-- pode-se colocar com AS, embora o sgbd já coloque ela automaticamente
SELECT preco,preco*2 AS "Dobro do Preço"
FROM tb_produtos;

--------------------------------------------------------------------------------
--CONCATENAÇÃO, CRIAÇÃO DE UMA SAÍDA MAIS AMIGÁVEL
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

-- valores null são o calcanhar de aquiles, então tome cuidado
-- Representado por (null), se estiver sem parenteses não é null
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
---- USANDO A FUNÇÃO NVL (Atenção pois é exclusiva do Oracle)

SELECT id_cliente, nome, sobrenome,
NVL(telefone, 'Numero do telefone desconhecido') AS Número_Telefone
-- NVL(Coluna, Valor_retornado)
FROM tb_clientes;
--------------
SELECT id_cliente, nome, sobrenome,
    NVL(dt_nascimento, '22/JUN/2013') AS "Data de Nascimento"
FROM tb_clientes;

--NULLIF(Expressão1, expressão2)
-- SE UM FOR IGUAL O DO OUTRO RETORNA NULO
SELECT nome, LENGTH(nome) "expressão1",
    sobrenome, LENGTH(sobrenome) "expressão2",
    NULLIF(LENGTH(nome), LENGTH(sobrenome))"Resultado"
FROM tb_funcionarios;

-- COALESCE(expressao1,expressao2,...expressaoN)
--BASICAMENTE UM NVL DE SGBDS QUE NN SÃO DA ORACLE
--Expressão1 é retornada se NÃO for null
--Expressão2 é retornada se a expressão1 for nula e ela NÃO
-- e assim por diante

SELECT nome, sobrenome,
    COALESCE(telefone, 'Telefone inexistente!!!') "Exemplo"
FROM tb_clientes;

SELECT nome, sobrenome,
    COALESCE(dt_nascimento, TO_DATE('21/08/2024')) "Exemplo"
FROM tb_clientes;

---- DISTINCT (mascara entradas em duplicidade)
---- TOMAR CUIDADO PRA NN MASCARAR ERROS CRÔNICOS

SELECT id_cliente
FROM tb_compras;

-- comparação numerica também funcona, como os < >
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
