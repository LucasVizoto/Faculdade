SELECT id_cliente, nome, sobrenome, dt_nascimento, telefone
FROM tb_clientes;

SELECT *
FROM tb_clientes;
-- Raramente se usa o * pois seleciona todas as colunas das tabelas, e acaba sendo sobrecarregado de dados

SELECT * 
FROM tb_clientes
WHERE id_cliente = 2;

-- TODO SGBD TEM O ENDEREÇO FISICO DE CADA LINHA
--ROWID (RECUPERA TUPLA DE FORMA MAIS RAPIDA, VBASICAMENTE UM ID DO PROPRIO SGBD)
-- 18 DIGITOS

SELECT ROWID, id_cliente
FROM tb_clientes;
-- Saída:
--AAASqyAAPAAAAcUAAB	2
--AAASqyAAPAAAAcUAAC	3
--AAASqyAAPAAAAcUAAD	4
--AAASqyAAPAAAAcUAAF	5
--AAASqyAAPAAAAcUAAE	6