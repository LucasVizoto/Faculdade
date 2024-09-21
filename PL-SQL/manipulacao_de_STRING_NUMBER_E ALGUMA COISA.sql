-- ASCII obtem o valor do caractere
-- basicamente, o que 'vale' o caracter

SELECT ASCII('a'), ASCII('A'), ASCII('z'), ASCII('Z')
FROM DUAL

-- CHR corresponde a convers�o do valor em um caractere

SELECT CHR(97), CHR(65), CHR(122)
FROM DUAL;

-- CONCAT permite concatenar o valores x e y retornando uma nova string
-- basicamente o ||

SELECT CONCAT(nome, sobrenome)
FROM tb_funcionarios;

-- INITCAP converte a primeira letra de cada palavra do valor retornado

SELECT id_produto INITCAP(ds_produto);
FROM tb_produto


--INSTR(X, LOCALIZAR_STRING)
-- Obt�m a posi��o onde ocorre a string

SELECT nm_produto, INSTR(nm_produto, 'Science')
FROM tb_produtos
where id_produto  =1;


-- Exibe a posi��o onde a 2�ocorrencia do caractere "e"
-- ocorre, come��ndo no inicio do NM_produto

--vai basicamente retonar a posi��o que est� a segunda ocorrencia
-- 'e' - valor a ser analisado, 1 onde come�a , 2 quantidade que quer achar
SELECT nm_produto, INSTR(nm_produto,'e',1,2)
FROM tb_produtos
WHERE id_produtos = 1;

-- LENGTH(X) obtem o comprimento da string
SELECT nm_produto, LENGTH(nm_produto)
FROM tb_produtos;

--LOWER e UPPER, converte os valores passados em mai�sculo e min�sculo

SELECT UPPER(nome), LOWER(sobrenome)
FROM tb_funcionarios;


--LPAD RPAD (left e rigth), geralmente usado no cmd
--preenche espa�os at� obter o comprimento total da string
--(valor, tamanho total da string, caractere que vai ser usado pra completar)
SELECT RPAD(nm_produto,30,'.'),LPAD(preco,8,'*%')
FROM tb_produtos
WHERE id_produtos<4;

--LTRIM e RTRIM e s� o TRIM
-- (tira espa�os do final conforme o que for passado, ou s� o espa�o mesmo)

SELECT
    LTRIM('   Ol� pessoas'),
    RTRIM('Oi!! tudo bem! abcabc', 'abc'),
    TRIM('0' FROM '000Treinamento em Oracle!000000')
FROM DUAL;


--NVL retorna um valor caso o param passado seja NULL

SELECT id_cliente, NVL(telefone, 'Telefone inexitente')
FROM tb_clientes
ORDER BY id_clientes DESC

-- NVL2 RETORNA VALOR1 CASO EXISTA E VALOR2 CASO SEJA NULL

SELECT id_cliente, NVL2(telefone, 'Telefone Existe', 'Telefone inexistente')
FROM tb_clientes
ORDER BY id_cliente DESC;


-- FUN��O DE REPLACE, BASICAMENTE(coluna, "valor que est�", 'valor que vai ser 
-- colocado')
SELECT REPLACE(nm_produto, 'Science', 'Physics')
FROM tb_produtos
WHERE id_produto = 1;


--SOUDEX Compara��o de palafras com fon�tica parecidas

SELECT sobrenome
FROM tb_clientes
WHERE SOUNDEX(sobrenome) = SOUNDEX('whyte');


--Substr (x, inicio, [comprimento])
--basicamente retorna um fatiamento da string x

SELECT nm_produto, SUBSTR(nm_produto,2,7)
FROM tb_produtos
WHERE id_produtos<4;

SELECT SUBSTR('Administrador de Banco de Dados - DBA',34,4)
FROM dual;


--Resultado de uma fun��o para sequencia de uma outra, devemos mesclar

SELECT nm_produto, UPPER(SUBSTR(nm_produto,2,8))
FROM tb_produtos
WHERE id_produtos<4;
---------------------------------------------------------------------------------------------

-- Expressoes numericas 

-- ABS obtem o valor absoluto do numero, ou seja,
--numero sem sinal de positivo ou negativo
SELECT id_produto,preci,preco-30.00, ABS(preco-30.00)
FROM tb_produtos
WHERE id_produtos<4;

-- CEIL , ARREDONDA PARA CIMA, mas geralmente se usa ROUND
SELECT CEIL(5.8), CEIL(-5.2)
FROM dual;


--FLOOR arredonda pra baixo
SELECT FLOOR(5.8), FLOOR(-5.2)
FROM dual;


-- MOD pega o resto da divis�o entre x e y
SELECT MOD(8,3), MOD(8,4)
FROM dual;


-- fn��o power obtem o resultado de x elevado a potencia de y

SELECT POWER(2,1), POWER(2,3)
FROM dual;

-- ROUND arredondamento dos decimais
SELECT ROUND(5.75), ROUND(5.75,1), ROUND(5.75, -1)
-- SE VOCE PASSAR UM VALOR NEGATIVO ELE ARREDONDA A PARTE INTEIRA E DE 10 EM 10
-- O HABITUAL � ARREDONDAR APENAS NOS DECIMAIS


--SIGN retorna 1 se positivo, -1 se negativo e zero se for zero

SELECT SIGN(-5), SIGN(5), SIGN(0)
FROM dual;


-- SQRT obtem a raiz quadrada de x
SELECT SQRT(25),ROUND(SQRT(5),2)
FROM dual;

--TRUNC realiza o truncamento de x com y casas decimais

SELECT TRUNC(5.75),TRUNC(5.75,1),TRUNC(5.75,-1)
FROM dual

-----------------------------------------------------------------------------------
--FUN��ES DE CONVERS�O
--TO CHAR CONVER X EM STRING

SELECT TO_CHAR(123456.78)
FROM dual;
--� POSSIVEL PASSAR TAMB�M COM UMA M�SCARA
SELECT TO_CHAR(12345.67,'99,999.99')
FROM dual;
-- � possivel tamb�m colocar um zero, cifr�o, a esquerda ou direita
--configurando a mascara
SELECT TO_CHAR(12345.67,'099,999.99')
FROM dual;
SELECT TO_CHAR(12345.67,'$99,999.99')
FROM dual;
--B se a parte inteira tiver um zero ele coloca espa�o
SELECT TO_CHAR(00.67,'B9.99')
FROM dual;
--C retorna o simbolo de moeda em uma posi��o especifica
--conforme seu sistema operacional
SELECT TO_CHAR(12345.67,'C99,999.99')
FROM dual;