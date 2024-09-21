-- produto cartesiano, multiplicando todas as tuplas de duas tabelas
SELECT p.id_tipo_produto,tp.id_tipo_produto
FROM tb_produtos p, tb_tipos_produtos tp;

--utilizando 4 tabelas e JOIN, exigindo 3 junções

SELECT c.nome, c.sobrenome, p.nm_produto AS produto,
    tp.nm_tipo_produto AS tipo
    --fazendo a seleção e declarando um identificador
    FROM tb_clientes c, tb_compras co, tb_produtos p, tb_tipos_produtos tp
    -- renomeando as tabelas tipo o import as do python
    WHERE c.id_cliente = co.id_cliente AND
        p.id_produtos = co.id_produto AND
        p.id_tipo_produto = tp.id_tipo_produto
        --realizando os JOINS e relacionando as tabelas
        ORDER BY p.nm_produto;
        -- orednação de como será exibida a tabela

-- junções que usam =, são equivalentes no caso EQUIJOIN
-- os NÃO EQUIJOIN utilizam qualquer operador, exceto o de igualdade (meio óbvio KSKSKS)
-- externo pode retornar null

SELECT f.nome, f.sobrenome, f.cargo, f.salario, gs.id_salario
FROM tb_funcionarios f, tb_grades_salarios gs
WHERE f.salario BETWEEN gs.base_salario AND gs.teto_salario
ORDER BY gs.id_salario;

-- caso queira preservar as tuplas do lado direito, colocar o operado + no lado esquerdo
-- essa parte é aquela em algebra relacional que diz sobre junções externa e interna
-- no caso, com inclusão de valores null
SELECT p.nm_produto AS produto, tp.nm_tipo_produto AS tipo
FROM tb_produtos p, tb_tipos_produtos tp
WHERE p.id_tipo_produto = tp.id_tipo_produto(+)
-- no caso aqui, quem será preservado será produto
ORDER BY 1;

-- as join externas tem dois tipos: esquerda e direita
SELECT p.nm_produto AS produto, tp.nm_tipo_produto AS tipo
FROM tb_produtos p, tb_tipos_produtos tp
WHERE p.id_tipo_produto(+) = tp.id_tipo_produto
-- no caso aqui, quem será preservado será a tabela tipos_produtos
ORDER BY 1;

-- FULLALTERJOIN, Basicamente, colocar essa condição para ambas as tabelas
-- na sintaxe do oracle, usar (+) em cada tabela, não funciona
-- também não funciona com OR
SELECT p.nm_produto AS produto, tp.nm_tipo_produto AS tipo
FROM tb_produtos p, tb_tipos_produtos tp
WHERE p.id_tipo_produto(+) = tp.id_tipo_produto
OR p.id_tipo_produto = 1;

--exibindo o nome de cada funcionário e seu respectivo gerente

SELECT F.nome ||' '|| f.sobrenome|| ' tabalha para '|| g.nome
FROM tb_funcionarios f, tb_funcionarios g
WHERE f.id_gerente = g.id_funcionario
ORDER BY f.nome


SELECT F.nome ||' tabalha para '|| NVL(g.sobrenome, 'os acionistas')
-- Caso o id_gerente da pessoa seja null (caso seja o gerente), será retornado "od acionistas"
FROM tb_funcionarios f, tb_funcionarios g
WHERE f.id_gerente = g.id_funcionario(+)
ORDER BY f.sobrenome DESC;
-- os exemplos de join até agora são do SQL/86
-- no SQL 92 É feito dessa forma

SELECT p.nm_produto AS PRODUTO, tp.nm_tipo_produto AS TIPO
FROM tb_produtos p
INNER JOIN tb_tipos_produtos tp ON (p.id_tipo_produto = tp.id_tipo_produto)
ORDER BY p.nm_produto;

-- exemplo de uma NÃO EQUIJOIN
SELECT f.nome, f.sobrenome, f.cargo, f.salario, gs.id_salario
FROM tb_funcionarios f
INNER JOIN tb_grades_salarios gs ON (f.salario BETWEEN gs.base_salario AND gs.teto_salario)
ORDER BY gs.id_salario;

-- caso seja uma equijoin e os nomes referenciados das tabelas sejam iguais, podemos usar o USING

SELECT p.nm_produto AS PRODUTO, tp.nm_tipo_produto AS TIPO
FROM tb_produtos p
INNER JOIN tb_tipos_produtos tp
USING(id_tipo_produto);

-- caso queremos que o SELECT pegue também a tupla que foi passada como predicado da junção
-- não colocar as identificações das tabelas 
--EX.:
SELECT p.nm_produto AS PRODUTO,
    tp.nm_tipo_produto AS TIPO, id_tipo_produto
FROM tb_produtos p
INNER JOIN tb_tipos_produtos tp
USING (id_tipo_produto);

-- caso você tente identificar a tabela em USING irá lançar um erro
-- ORA-01748: somente nomes simples de coluna permitidos aqui
SELECT p.nm_produto AS PRODUTO,
    tp.nm_tipo_produto AS TIPO, id_tipo_produto
FROM tb_produtos p
INNER JOIN tb_tipos_produtos tp
USING (tp.id_tipo_produto);

-- maximixando o using para uma consulta com 4 tabelas
SELECT c.nome, c.sobrenome, p.nm_produto AS produto,
    tb.nm_tipo_produto AS tipo
FROM tb_clientes c
INNER JOIN tb_compras co USING(id_cliente)
INNER JOIN tb_produtos p USING(id_produtos)
INNER JOIN tb_tipos_produtos tp USING(id_tipo_produto)
ORDER BY p.nm_produto;