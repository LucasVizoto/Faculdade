CREATE TABLE tb_plano_conveniado(
cod_plano 		INTEGER,
nm_plano		VARCHAR(25),
CONSTRAINT pk_tb_plano_conven PRIMARY KEY(cod_plano)
);

------------------------------------------------------
--criação da "interface funcionarios"
CREATE TABLE tb_funcionarios(
matri_func			INTEGER,
nm_func				VARCHAR(60),
end_func			VARCHAR(45),
cell_func			VARCHAR(15),
fone_func			VARCHAR(15),
CONSTRAINT pk_tb_funcionarios_matricula PRIMARY KEY(matri_func)
);
------------------------------------------------------

CREATE TABLE tb_enfermeiros(
matri_func	INTEGER,
coren		INTEGER,
CONSTRAINT fk_tb_enfermeiros_matri_func FOREIGN KEY(matri_func)
	REFERENCES tb_funcionarios(matri_func)
);
------------------------------------------------------
-- tabela que "herda" os dados da inteface
CREATE TABLE tb_medicos(
matri_func		INTEGER,
crm				INTEGER,
CONSTRAINT fk_tb_medicos_matri_func FOREIGN KEY(matri_func)
	REFERENCES tb_funcionarios(matri_func)
);
------------------------------------------------------
CREATE TABLE tb_tipo_comodo(
id_tipo		INTEGER,
ds_tipo		VARCHAR(60),
CONSTRAINT pk_tb_tipo_comodo_id_comodo PRIMARY KEY(id_tipo)
);
------------------------------------------------------
CREATE TABLE tb_comodo(
nr_comodo			INTEGER,
id_tipo				INTEGER,
situacao_comodo		BOOL,
CONSTRAINT pk_tb_comodo_nr_comodo PRIMARY KEY(nr_comodo),
CONSTRAINT fk_tb_comodo_id_tipo FOREIGN KEY(id_tipo)
	REFERENCES tb_tipo_comodo(id_tipo)
);
------------------------------------------------------
CREATE TABLE tb_leito(
nr_leito		INTEGER,
nr_comodo		INTEGER,
situacao_leito	BOOL,
CONSTRAINT pk_tb_leito_nr_leito PRIMARY KEY(nr_leito),
CONSTRAINT fk_tb_leito_nr_comodo FOREIGN KEY(nr_comodo)
	REFERENCES tb_comodo(nr_comodo)
);
------------------------------------------------------

