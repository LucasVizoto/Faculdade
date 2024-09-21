--CRIANDO O OBJETO "TB_CLIENTES"
CREATE TABLE tb_clientes(
rg_cliente			VARCHAR(11),
nm_cliente			VARCHAR(60),
dt_nascimento		DATE,
CONSTRAINT pk_tb_clientes_rg_cliente PRIMARY KEY(rg_cliente)
);

--CRIANDO OBJ TB_BIBLIIOTECARIOS
CREATE TABLE tb_bibliotecarias(
rg_bibliotecaria			VARCHAR(11),
nm_bibliotecaria			VARCHAR(60),
dt_nascimento				DATE,
CONSTRAINT pk_tb_biblio_rg_biblio PRIMARY KEY (rg_bibliotecaria)
);

--CRIANDO OBJ TB_LIVROS
CREATE TABLE tb_livros(
codigo				INTEGER,
ds_livro			VARCHAR(25),
ds_categoria		VARCHAR(15),
rg_cliente			VARCHAR(11),
dt_devolucao		DATE,
rg_bibliotecaria	VARCHAR(11),
CONSTRAINT pk_tb_livros_codigo PRIMARY KEY(codigo),
CONSTRAINT fk_tb_livros_rg_cliente FOREIGN KEY(rg_cliente)
	REFERENCES tb_clientes(rg_cliente),
CONSTRAINT fk_tb_livros_rg_biblio FOREIGN KEY(rg_bibliotecaria)
	REFERENCES tb_bibliotecarias(rg_bibliotecaria)
);

--removendo o obj tb_clientes
DROP TABLE tb_clientes CASCADE;


-- RECRIANDO A TB_CLIENTES PARA O PRÓXIMO EXEMPLO
CREATE TABLE tb_clientes(
rg_cliente 			VARCHAR(11),
nm_cliente 			VARCHAR(60),
dt_nascimento		DATE,
CONSTRAINT pk_tb_clientes_rg_cliente PRIMARY KEY(rg_cliente)
);

--CRIANDO OBJ TB_CONTAS
CREATE TABLE tb_contas(
nr_conta		INTEGER,
ds_conta		VARCHAR(15),
dt_abertura		DATE,
CONSTRAINT pk_tb_contas_nr_conta PRIMARY KEY(nr_conta) 
);

--CRIANDO O OBJ TB_CORRENTISTAS CARACTERIZADO PELO EXEMPLO COMO
--ENTIDADE ASSOCIATIVA (N:N)
CREATE TABLE tb_correntistas(
rg_cliente		VARCHAR(11),
nr_conta		INTEGER,
CONSTRAINT pk_tb_correntistas_rg_nr PRIMARY KEY(rg_cliente, nr_conta),
CONSTRAINT fk_tb_correntistas_rg_cliente FOREIGN KEY(rg_cliente)
	REFERENCES tb_clientes(rg_cliente),
CONSTRAINT fk_tb_correntistas_nr_conta FOREIGN KEY(nr_conta)
	REFERENCES tb_contas(nr_conta)
);

--CRIANDO O OBJ TB_CARTOES_MAGNETICOS
CREATE TABLE tb_cartoes_magneticos(
nr_cartao		INTEGER,
dt_expedicao	DATE,
rg_cliente		VARCHAR(11) CONSTRAINT nn_tb_cm_rg_cliente NOT NULL,
nr_conta		INTEGER CONSTRAINT nn_tb_cm_nr_contas NOT NULL,
CONSTRAINT pk_tb_cm_nr_cartao PRIMARY KEY(nr_cartao),
CONSTRAINT fk_tb_cm_rg_cliente FOREIGN KEY (rg_cliente)
	REFERENCES tb_clientes(rg_cliente),
CONSTRAINT fk_tb_cm_nr_contas FOREIGN KEY (nr_conta)
	REFERENCES tb_contas(nr_conta)
);


--CRIANDO O OBJ TB_INSTITUICOES 
CREATE TABLE tb_instituicoes(
sigla			CHAR(3),
nm_intituicao	VARCHAR(60),
CONSTRAINT pk_tb_intituicoes_sigla PRIMARY KEY(sigla)
);


--CRIADO O OBJ TB_PROJETOS
CREATE TABLE tb_projetos(
nr_projeto		INTEGER,
ds_projeto		VARCHAR(25),
CONSTRAINT pk_tb_projetos PRIMARY KEY(nr_projeto)
);

--CRIANDO O OBJ TB_PESQUISADORES
CREATE TABLE tb_pesquisadores(
rg_pesquisador		VARCHAR(11),
nm_pesquisador		VARCHAR(60),
titulacao			VARCHAR(10),
CONSTRAINT pk_tb_pesquisadores_rg_pesquisador PRIMARY KEY(rg_pesquisador)
);

-- CRIANDO OBJ TB_PESQUISAS PARA ATENDER O RELACIONAENTO N:N:N
CREATE TABLE tb_pesquisa(
sigla 			CHAR(3),
nr_projetos		INTEGER,
rg_pesquisador	VARCHAR(11),
CONSTRAINT pk_tb_pesquisas_sigla_nr_rg PRIMARY KEY(sigla, nr_projetos, rg_pesquisador),
CONSTRAINT fk_tb_pesquisas_sigla FOREIGN KEY(sigla)
	REFERENCES tb_instituicoes(sigla),
CONSTRAINT fk_tb_pesquisas_nr_projetos FOREIGN KEY(nr_projetos)
	REFERENCES tb_projetos(nr_projeto),
CONSTRAINT fk_tb_pesquisas_rg_pesquisador FOREIGN KEY(rg_pesquisador)
	REFERENCES tb_pesquisadores(rg_pesquisador) 
);

--CRIANDO O OBJ TB_PRODUTOS
CREATE TABLE tb_produtos(
codigo		INTEGER,
ds_produto	VARCHAR(25),
preco_venda	NUMERIC(5,2),
CONSTRAINT pk_tb_produtos_codigo PRIMARY KEY(codigo)
);

--CIANDO O OBJ TB_CIDADES
CREATE TABLE tb_cidades(
codigo			INTEGER,
nm_cidade		VARCHAR(40),
estado			CHAR(2),
CONSTRAINT pk_tb_cidades_codigo PRIMARY KEY(codigo)
);

--CRIANDO OBJ TB_DISSTRIBUIDORES
CREATE TABLE tb_distribuidores(
rg_distribuidor			VARCHAR(11),
nm_distribuidor			VARCHAR(60),
CONSTRAINT pk_tb_distribuidores_rg_dist PRIMARY KEY(rg_distribuidor)
);

--CRIANDO OBJ TB_DISTRIBUICOES PARA ATENDER AO RELACIONAMENTO 1:N:N
CREATE TABLE tb_distribuicoes(
cod_produto			INTEGER,
cod_cidade			INTEGER,
rg_distribuidor		VARCHAR(11),
CONSTRAINT pk_tb_distribuicoes_cod_prod_cod_cid PRIMARY KEY(cod_produto, cod_cidade),
CONSTRAINT fk_tb_distribuicoes_cod_prod FOREIGN KEY(cod_produto)
	REFERENCES tb_produtos(codigo),
CONSTRAINT fk_tb_distribuicoes_cod_cid FOREIGN KEY(cod_cidade)
	REFERENCES tb_cidades(codigo),
CONSTRAINT fk_tb_distribuicoes_rg_dist FOREIGN KEY(rg_distribuidor)
	REFERENCES tb_distribuidores(rg_distribuidor)
);

--CRIANDO OBJ TB_BAIRROS
CREATE TABLE tb_bairros(
codigo				INTEGER,
ds_bairro			VARCHAR(25),
CONSTRAINT pk_tb_bairros_codigo PRIMARY KEY(codigo)
);

--CRIANDO O OBJ TB_CARTEIROS
CREATE TABLE tb_carteiros(
rg_carteiro			VARCHAR(11),
nm_carteiro			VARCHAR(60),
dt_admissao			DATE,
CONSTRAINT pk_tb_carteiros_rg_carteiro PRIMARY KEY(rg_carteiro)
);

--CRIANDO O OBJ "TB_CORRESPONDENCIAS " O QUAL ACOMODA AS CHAVES ESTRANGEIRAS 1:1:N
CREATE TABLE tb_correspondencias(
codigo			INTEGER,
peso			FLOAT,
cod_bairro		INTEGER,
rg_carteiro		VARCHAR(11),
CONSTRAINT pk_tb_correspondencias PRIMARY KEY(codigo),
CONSTRAINT fk_tb_correspondencias_cod_bairro FOREIGN KEY(cod_bairro)
	REFERENCES tb_bairros(codigo),
CONSTRAINT fk_tb_correspondencias_rg_carteiro FOREIGN KEY(rg_carteiro)
	REFERENCES tb_carteiros(rg_carteiro)
);
