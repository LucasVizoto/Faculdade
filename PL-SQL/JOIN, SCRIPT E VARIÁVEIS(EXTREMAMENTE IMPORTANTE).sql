--exemplo de join

SELECT p.nm_produto AS produto, tp.nm_tipo_produto AS tipo
FROM tb_produtos p
LEFT OUTER JOIN tb_tipos_produtos tp USING(id_tipo_produto)
ORDER BY p.nm_produto;

-- join é conserver a tabela, ou seja, trazer todos os valores, mesmo que
-- não satisfazam o predicado
-- Aparece o produto "My Front Line" que tem null acossiado a ele

SELECT p.nm_produto AS produto, tp.nm_tipo_produto AS tipo
FROM tb_produtos p
RIGHT OUTER JOIN tb_tipos_produtos tp USING(id_tipo_produto)
ORDER BY p.nm_produto;
-- aparece o tipo de produto "magazine" que tem null acossiado a ele

SELECT p.nm_produto AS produto, tp.nm_tipo_produto AS tipo
FROM tb_produtos p
FULL OUTER JOIN tb_tipos_produtos tp USING(id_tipo_produto)
ORDER BY p.nm_produto;
--PRESERVA TUDO DE AMBAS AS TABELAS (LEFT E RIGHT)
-- Nesse caso aparece o "My Front Line" e também "Magazine"


SELECT f.nome||' '||f.sobrenome||' trabalha para '||g.nome
FROM tb_funcionarios f
INNER JOIN tb_funcionarios g ON(f.id_gerente = g.id_funcionario)
ORDER BY f.nome;
--possivel questão de prova "Pode usar USING?? Não pois os predicados nn tem o mesmo nome"
-- INNER é uma junção própria

--APENAS JOIN ENTRE DUAS TABELAS GERA UM PRODUTO CARTESIANO
-- USANDO CROSS JOIN É EXPLICITO, ENTÃO TAMBÉM USÁVEL

SELECT *
FROM tb_tipos_produtos
CROSS JOIN tb_produtos;


--  & gera uma variável
SELECT id_cliente, nm_produto, preco
FROM tb_produtos
WHERE id_produtos = &v_id_produto;
--gera um alert/input para inserir um numero e fazer a consulta


SELECT nm_produto, &v_coluna
FROM &v_tabela
WHERE &v_coluna = &v_id_produtos;
-- em v_tabele, eu digito o nome da tabela e ele busca


--caso queira reaproveitar os dados, para nn precisar digitar de novo
-- colocar dois &&, que ele pega de novo

SELECT nm_produto, &&v_coluna
FROM &v_tabela
WHERE &&v_coluna = &v_id_produtos;


-- persiste até que seja redefinida, DEFINE E UNDEFINE, chamam a var

DEFINE v_id_produto = 7; -- statando a var com 7

SELECT nm_produto, id_produtos
FROM tb_produtos
WHERE id_produtos = &v_id_produto;

-- ACCEPT permite trabalhar co o data type, dar uma mensagem e condições 
-- para a consulta
ACCEPT v_id NUMBER FORMAT 99 PROMPT 'Entre com o ID';

SELECT id_produtos, nm_produto, preco
FROM tb_produtos
WHERE id_produtos = &v_id;



-- UNDEFINE REMOVE A VARIAVEL DA SEÇÃO

DEFINE v_id_produto = 7;

SELECT nm_produto, id_produtos
FROM tb_produtos
WHERE id_produtos = &v_id_produto;

UNDEFINE v_id_produto;
-- depois de removida ele pede para inserir via prompt, caso vc só rode a query


--CHAMANDO O SCRIPT teste_1.sql criado na pasta temp da raiz do pc
@ C:/temp/teste_1.sql


--realizando um segundo teste com o accept
@ C:/temp/teste_2.sql


-- montando o mesmo teste mas com um posicionamento na chamada da variável
-- chamada posicional, &1
@ C:/temp/teste_3.sql 2
-- 0 2 no final serve para declarar o valor da variável que queremos na chamada
