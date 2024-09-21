--CRIANDO TABELA EMPREGADOS
CREATE TABLE tb_empregados(
rg					VARCHAR(11),
nm_empregados		VARCHAR(60),
idade				INTEGER,
CONSTRAINT pk_tb_empregados_rg PRIMARY KEY(rg)
);


--criando objeto tb_pedidos
CREATE TABLE tb_pedidos(
nr_pedido			INTEGER,
ds_pedido			VARCHAR(20),
dt_pedido			DATE,
CONSTRAINT pk_tb_pedidos_nr_pedido PRIMARY KEY(nr_pedido)
);

--criando objeto tb_itens
--  DROP TABLE tb_itens CASCADE; (APAGA A TABELA QUE ACABOU DE SER CRIADA)

CREATE TABLE tb_itens(
nr_pedido		INTEGER,
nr_iten			INTEGER,
nm_produto		VARCHAR(40),
quantidade		INTEGER,
CONSTRAINT pk_tb_itens_nr_pedido_nr_iten PRIMARY KEY(nr_pedido, nr_iten),
CONSTRAINT fk_tb_itens_nr_pedido FOREIGN KEY(nr_pedido)
	REFERENCES tb_pedidos(nr_pedido)
);

--CRIANDO OBJ tb_empreados com uma nova versão
DROP TABLE tb_empregados CASCADE;

CREATE TABLE tb_empregados(
rg					VARCHAR(11),
nm_empregados		VARCHAR(60),
idade				INTEGER,
plano_saude			VARCHAR(10),
rua					VARCHAR(20),
numero				VARCHAR(5),
cidade				VARCHAR(20),
CONSTRAINT pk_tb_empregados_rg PRIMARY KEY(rg)
);

-- criando obj tb_telefone
CREATE TABLE tb_telefones(
rg				VARCHAR(11),
nr_telefone 	VARCHAR(15),
CONSTRAINT pk_tb_telefones_rg_nr PRIMARY KEY(rg, nr_telefone),
CONSTRAINT fk_tb_telefones_rg FOREIGN KEY(rg)
	REFERENCES tb_empregados(rg)
);

--criando o obj tb_servidores
CREATE TABLE tb_servidores(
cpf			VARCHAR(11),
nm_servidor	VARCHAR(60),
CONSTRAINT pk_tb_servidores_cpf PRIMARY KEY(cpf)
);

--criando o obj tb_uncionarios
CREATE TABLE tb_funcionarios(
cpf 			VARCHAR(11),
ds_funcionario	VARCHAR(20),
CONSTRAINT pk_tb_funcionarios_cpf PRIMARY KEY(cpf),
CONSTRAINT fk_tb_funcionarios_cpf FOREIGN KEY(cpf)
	REFERENCES tb_servidores(cpf)
);

--criando o obj tb_professores
CREATE TABLE tb_professores(
cpf				VARCHAR(11),
titulacao		VARCHAR(15),
categoria		VARCHAR(15),
CONSTRAINT pk_tb_professores_cpf PRIMARY KEY(cpf),
CONSTRAINT fk_tb_professores_cpf FOREIGN KEY(cpf)
	REFERENCES tb_servidores(cpf)
);

-- criando o obj tb_pessoas
CREATE TABLE tb_pessoas(
codigo			INTEGER,
nm_pessoa		VARCHAR(60),
CONSTRAINT pk_tb_pessoas_codigo PRIMARY KEY(codigo)
);

--criando tb_cnh
-- DROP TABLE tb_cnh;
CREATE TABLE tb_cnh(
nr_cnh				INTEGER, -- CHAVE PRIMARIA JÁ TEM UNIQUE NOT NULL E INDEX
dt_expedicao		DATE,
validade			DATE,
categoria			VARCHAR(5),
codigo				INTEGER CONSTRAINT nn_tb_cnh_codigo NOT NULL
							CONSTRAINT uq_tb_cnh_codigo UNIQUE,
dt_retirada			DATE,
CONSTRAINT pk_tb_cnh_nr PRIMARY KEY(nr_cnh),
CONSTRAINT fk_tb_cnh_codigo FOREIGN KEY (codigo)
	REFERENCES tb_pessoas(codigo)
);

-- c