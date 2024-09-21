--TO_CHAR(x, [format])
-- param FM remove os espaços a esquerda e direita do numero
SELECT TO_CHAR(0012345.6700, 'FM99999.99')
FROM dual;
--Parametro G retorna o simbolo de separador de grupo em uma posição, 
--mas ninguem usa pq virgula ta ai pra isso

-- L retorna o simbolo da moeda
SELECT TO_CHAR(12345.67, 'L99999.99')
FROM dual;
--MI retorna um número negativo com sinal de menos à direita
SELECT TO_CHAR(-12345.67, '99,999.99MI')
FROM dual;
-- PR retorna o numero negativo entre os sinais de menos e maior
SELECT TO_CHAR(-12345.67,'99,999.99RN')
FROM DUAL;
--TM retorna um numero utilizando a quantidade mínima de caracteres
-- IGNORÁVEL
-- S realiza a operação matemática da implementação de um sinal de -
-- ou seja, se tem negativo na esquerda ou direita, vai virar positivo
SELECT TO_CHAR(12345.67, 'S99999.99')
FROM DUAL;
-- U retorna o ismbolo de moeda em uma posição específica

-- V retorna o numero multiplicado por 10x, onde x é o numero de caracteres 9 
-- após a letra v
SELECT TO_CHAR(12345.67, '99999V99')
FROM DUAL;
-- CASO SUA MÁSCARA ESTEJA ERRADA, ELE RETORNA VARIOS #######
SELECT TO_CHAR(12345.67, '999999999999,99,99.9')
FROM DUAL;

-- É possivel usar o To_char com nossos valores

SELECT id_produtos, 'O preço do produto é: '||TO_CHAR(preco,'L99.99')
FROM tb_produtos
WHERE id_produtos<5;

--TO_NUMBER converte x em um numero

SELECT TO_NUMBER('970,13')
FROM DUAL;
--REALIZANDO OPERAÇÕES
SELECT TO_NUMBER('970,13')+25.50
FROM DUAL;
--ELE TAMBÉM FAZ DE FORMA IMPLÍCITA
SELECT '970.99'+25.5
FROM DUAL;

--DÁ PRA COLOCAR MÁSCARA TAMBÉM
SELECT TO_NUMBER('$12,345.67', "$99,999.99")
FROM DUAL;

-- CAST EXISTE EM QUALQUER SGBD, POR ISSO É MELHOR QUE TO_CHAR E TO_NUMBER
-- BASICAMENTE CONSISTE NA CONVERSÃO EM OUTRO DATATYPE

SELECT
    CAST(12345.67 AS VARCHAR2(10)),
    CAST('9A4F' AS RAW(2)),
--RAW CONVERÇÃO PARA OPERAÇÕES BINÁRIAS (NESTE CASO SAI DE HEXADECIMAL)
    CAST('01-DEZ-2007' AS DATE),
    CAST(12345.678 AS NUMBER(10,2))
FROM DUAL;

-- USANDO OS VALORES DA COLUNA PRECO
SELECT 
    CAST(preco AS VARCHAR2(10)),
    CAST(preco+2 AS NUMBER(7,2)),
    CAST(preco AS BINARY_DOUBLE)
FROM tb_produtos
WHERE id_produtos = 1;

------------------------------------------------------------------------------

-- EXPRESSÕES REGULARES
-- ENCONTRAR UM PADRÃO DE CARACTERES EM UMA STRING

-- Basicamente, vai buscar os numeros de 1965 até 1968
^196[5-8]$
--vide slide 66 do slide 3
-- REGEXP_LIKE realiza essa expre
SELECT id_cliente, nome, sobrenome, dt_nascimento
FROM tb_clientes
WHERE REGEXP_LIKE(TO_CHAR(dt_nascimento, 'YYYY'), '196[5-8]$');
--resgatou os clientes com dt_nascimento com ano entre 65 e 68

--pode-se setar param, no caso o i é de insensitive case (tanto faz se é maiúsculo 
-- ou minusculo)
SELECT id_cliente, nome,sobrenome, dt_nascimento
FROM tb_clientes
WHERE REGEXP_LIKE(nome,'j','i');


-- Nesse caso olhando dentro da string passada, APARTIR  da 6º posição
-- pegar o segundo caso de 'e'
SELECT
    REGEXP_INSTR('Teste de expressão regular', 'e',6,2) AS resultado
FROM dual;


--REGEXP_REPLACE pesquisa depois nego, geraldo tá rapido
SELECT
    REGEXP_REPLACE('Teste de expressão regular', 'd[[alpha:]]{1}', 'Oracle') AS resultado
FROM DUAL;

--REGEXP_SUBSTR(FAZER UM SLICING DA STRING ORIGINAL)
--SUBSTR ´SUBSTRING
SELECT 
    REGEXP_SUBSTR('Teste de expressão regular', 'e[[:alpha:]]{8}') AS resultado
FROM DUAL;


--REGEXP_COUNT (CONTAR QUANTAS VEZES A PALAVRA OCORRE)
SELECT 
    REGEXP_COUNT('teste teste teste expressão regular', 't[[:alpha:]]{4}') AS resultado
FROM DUAL;


------------------------------------------------------------------------------------------------

-- FUNÇÕES AGRREGADAS

--AVG obtem o valor medio de x

SELECT ROUND(AVG(preco),2)
FROM tb_produtos;
--Pode-se realizar opreções de soma  dentro do avg

--DISTINCT exclui valores identicos
SELECT AVG(DISTINCT preco)
FROM tb_produtos;

-- COUNT, obtem o numero de linhas em uma determinada consulta
SELECT COUNT(id_produtos) --ROWID é nice
FROM tb_produtos;

SELECT COUNT(ROWID)
FROM tb_produtos;

-- MAX e MIN é literalmente como no Python
SELECT MAX(preco), MIN(preco)
FROM tb_produtos;


-- Selecionando nome junto, você realiza uma subquery
SELECT nm_produto, preco
FROM tb_produtos
WHERE preco = (SELECT MAX(preco)
                FROM tb_produtos);
                