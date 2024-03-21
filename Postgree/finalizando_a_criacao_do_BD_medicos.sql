--cRIANDO O 5°OBJ "tb_paciente"
-- Restrição PK aplicada a coluna "cpf"
--			 FK aplicada a coluna "nr_quarto"
--			 FK aplicada a coluna " crm"
CREATE TABLE tb_pacientes(
cpf			INTEGER,
nr_quarto	INTEGER CONSTRAINT uq_tb_pacientes_nr_quartos UNIQUE, --a gente nn pode ter mais de um paciente no mesmo quarto
--o unique traz valores individuais e não duplicados 
crm			VARCHAR(8),
nm_paciente	VARCHAR(60),
endereco	VARCHAR(60),
rg			VARCHAR(11),
telefone	VARCHAR(15),
hr_visita	TIME,
CONSTRAINT pk_tb_paciente_cpf PRIMARY KEY(cpf),
CONSTRAINT fk_tb_paciente_nr_quarto FOREIGN KEY(nr_quarto)
	REFERENCES tb_quartos(nr_quarto),
CONSTRAINT fk_tb_pacientes_crm FOREIGN KEY(crm)
	REFERENCES tb_medicos(crm)
);

INSERT INTO tb_pacientes(cpf, nr_quarto,crm, nm_paciente, endereco,rg, telefone,hr_visita)
VALUES
(12345678,12,'FSDFS','SGSFGS','asfasdfas','fdfgdfgsd', 'fgdsfgdfg', '20:05:00')

SELECT *
FROM tb_pacientes

--CRIANDO 6° OBJ "TB_TRATAMENTOS"
-- rESTRIÇÕES PK composta aplicada as colunas "crm + cpf"
--			  FK aplicada a coluna "crm"
-- 			  FK aplicada a coluna "cpf"

CREATE TABLE tb_tratamentos(
crm			VARCHAR(8),
cpf			INTEGER,
CONSTRAINT pk_tb_tratamento_crm_cpf PRIMARY KEY(crm, cpf),
CONSTRAINT fk_tb_tratamento_crm FOREIGN KEY(crm)
	REFERENCES tb_medicos(crm),
CONSTRAINT fk_tb_tratamentos_cpf FOREIGN KEY(cpf)
	REFERENCES tb_pacientes(cpf)
);


--criando o 7° obj "tb_clinicas_medicos"
--Restrições PK composta aplicada a coluna "cnpj + crm"
--			 FK aplicada a coluna "cnpj"
--			 FK aplicada a coluna "crm"
CREATE TABLE tb_clinicas_medicos(
cnpj		VARCHAR(15),
crm 		VARCHAR(8),
CONSTRAINT pk_tb_cm_cnpj_crm PRIMARY KEY(cnpj,crm),
CONSTRAINT fk_tb_cm_cnpj FOREIGN KEY(cnpj)
	REFERENCES tb_clinicas(cnpj),
CONSTRAINT fk_tb_cm_crm FOREIGN KEY(crm)
	REFERENCES tb_medicos(crm)
);

--criando o 8° obj "tb_clinicas_pacientes"
--Restrições: PK composta pelas colunas "cnpj + cpf"
-- 			  FK aplicada a coluna "cpnj"
-- 			  FK aplicada a coluna "cpf"
CREATE TABLE tb_clinicas_pacientes(
cnpj		VARCHAR(15),
cpf			INTEGER,
CONSTRAINT pk_tb_cp_cnpj_cpf PRIMARY KEY(cnpj, cpf),
CONSTRAINT fk_tb_cp_cnpj FOREIGN KEY(cnpj)
	REFERENCES tb_clinicas(cnpj),
CONSTRAINT fk_tb_cp_cpf FOREIGN KEY(cpf)
	REFERENCES tb_pacientes(cpf)
);
