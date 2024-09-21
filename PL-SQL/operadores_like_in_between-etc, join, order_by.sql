-- OPERADORES SQL LIKE, IN, BETWEEN, IS NULL, IS NAN, IS INFINITI
-- PODENDO SER NEGADOS COM NOT 

--Like � tipo um where para padr�o em uma String

-- _ corresponde a qualquer caractere na primeira posi��o e % corresponde a todos os caracteres passados ap�s o param passado
-- � sensitive case (diferencia minusculo e mai�culo)
SELECT *
FROM tb_clientes
WHERE nome LIKE '_o%';
-- retornou John e Doreen (_o%)

SELECT *
FROM tb_clientes
WHERE nome LIKE '%a';
-- retorna todo mundo que termina o nome com a]

SELECT *
FROM tb_clientes
WHERE nome LIKE 'J%';
-- nome de todos os clientes que come�am com J mai�sculo

SELECT * 
FROM tb_clientes
WHERE nome LIKE '____';
-- Seleciona todos os nomes com apenas 4 caracteres

-- caso seja necess�rio encontrar porcentagem ou underscore (coringa), usa-se o ESCAPE, sinalizado por uma barra invertida \%
-- na verdade o ESCAPE � configurado ao final da declara��o

SELECT nome
FROM tb_promocao
WHERE nome LIKE '%\%%' ESCAPE '\'

-- IN SERVE PARA RECUPERAR VALORES EM UMA LISTA
SELECT *
FROM tb_clientes
WHERE id_cliente IN (2,3,5);

-- usando not, voc� pega aqueles que n�o est�o na lista
SELECT *
FROM tb_clientes
WHERE id_cliente NOT IN (2,3,5);

-- funciona para string tamb�m
SELECT *
FROM tb_clientes
WHERE nome NOT IN ('Steve');

-- N�o vai retornar nada pois o Null n�o foi tratado com NVL
SELECT *
FROM tb_clientes
WHERE id_cliente NOT IN (2,3,5,NULL);
 
-- forma com null tratado
SELECT *
FROM tb_clientes
WHERE id_cliente NOT IN (2, 3, 5, NVL(NULL, 0));

-- Between recuperar valor ENTRE, ou seja, num intervalo 
-- Retornou os valores entre 1 e 3, incluindo as extremidades
SELECT *
FROM tb_clientes
WHERE id_cliente BETWEEN 1 AND 3;
-- Existe tamb�m a nega��o
SELECT *
FROM tb_clientes
WHERE id_cliente NOT BETWEEN 1 AND 3;

-- operadores l�gicos tamb�m s�o aplicados
--x AND y
--x OR y
--NOT x

-- ambas as condi��es
SELECT *
FROM tb_clientes
WHERE dt_nascimento > '01/JAN/1970' AND id_cliente>3;
--Uma condi��o ou  a outra
SELECT *
FROM tb_clientes
WHERE dt_nascimento > '01/JAN/1970' OR id_cliente>3;

-- AND sempre � processado primeiro e depois o OR, Nesse caso funciona como um ()

SELECT *
FROM tb_clientes
WHERE dt_nascimento> '01/JAN/1970' OR
    id_cliente<2 AND
    telefone LIKE '%1211';

------------------------
--Order by classificar as tuplas recuperadas
-- a-z para string e 0-n pra number
SELECT *
FROM tb_clientes
ORDER BY sobrenome;

--DESC - decrescente
--ASC - ascendente (default, oq geralmente faz)

-- A segunda coluna geralmente � passada para crit�rio de desempate, nesse caso o sobrenome
SELECT *
FROM tb_clientes
ORDER BY nome ASC, sobrenome DESC;

-- Neste caso selecionamos a ordena��o com base no que foi passado no select,
-- caso seja passado um *, a ordem � a da tabela original
SELECT id_cliente, nome, sobrenome
FROM tb_clientes
ORDER BY 1;


-----------------------------------------------
-- JOIN => numero de tabelas envolvidas-1
-- no exemplo vamos conectar as tabelas produtos e tipos produtos com o id_tipo_produto, usando JOIN
SELECT nm_produto, id_tipo_produto
FROM tb_produtos
WHERE id_produtos = 3;

SELECT nm_tipo_produto
FROM tb_tipos_produtos
WHERE id_tipo_produto = 2;


-- usando join e apenas uma unica consulta
-- na clausula where configuramos o predicado da jun��o

-- como no exemplo os nomes s�o iguais, � necess�rio identificar o nome da tabela utilizada

SELECT tb_produtos.nm_produto,
        tb_tipos_produtos.nm_tipo_produto
FROM tb_produtos,tb_tipos_produtos
WHERE tb_produtos.id_tipo_produto = tb_tipos_produtos.id_tipo_produto
AND tb_produtos.id_tipo_produto = 3;

--a vers�o 23ai coloca number como ultimo da ordena��o
SELECT tb_produtos.nm_produto,
        tb_tipos_produtos.nm_tipo_produto
FROM tb_produtos,tb_tipos_produtos
WHERE tb_produtos.id_tipo_produto = tb_tipos_produtos.id_tipo_produto
ORDER BY tb_produtos.nm_produto

-- NULL n�o recupera

-- podemos apelidar as tabelas para facilitar a vida (tipo um import as do python)
SELECT p.nm_produto,
        tp.nm_tipo_produto
FROM tb_produtos p,tb_tipos_produtos tp
WHERE p.id_tipo_produto = tp.id_tipo_produto
ORDER BY p.nm_produto;