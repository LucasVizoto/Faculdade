CREATE TABLE tb_funcionarios(
matricula_func			VARCHAR(5),
sigla_dpto				VARCHAR(5),
nome_func				VARCHAR(60),
data_admissao			DATE,
data_nascimento			DATE,
CONSTRAINT pk_tb_funcionarios_matricula PRIMARY KEY(matricula_func),
CONSTRAINT fk_tb_departamentos_sigla FOREIGN KEY(sigla_dpto)
	REFERENCES tb_departamentos(sigla_dpto)
);

CREATE TABLE tb_departamentos(
sigla_dpto			VARCHAR(5),
nome_dpto			VARCHAR(60),
ramal_dpto			INTEGER,
data_lotacao		DATE,
CONSTRAINT pk_tb_departamentos_sigla PRIMARY KEY(sigla_dpto)
);

CREATE TABLE tb_alocados(
matricula_func		VARCHAR(5),
sigla_dpto			VARCHAR(5),
data_alocacao		DATE,
CONSTRAINT fk_tb_alocados_matricula FOREIGN KEY(matricula_func)
	REFERENCES tb_funcionarios(matricula_func),
CONSTRAINT fk_tb_alocados_sigla FOREIGN KEY(sigla_dpto)
	REFERENCES tb_departamentos(sigla_dpto)
);

CREATE TABLE tb_projetos(
cod_projeto 		INTEGER,
nome_projeto		VARCHAR(60),
CONSTRAINT pk_tb_projetos_cod_pjt PRIMARY KEY(cod_projeto)
);