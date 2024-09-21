--Criado o 1° obj "tb_clinicas"
CREATE TABLE tb_clinicas(
cnpj		VARCHAR(15),
nm_clinica	VARCHAR(60),
CONSTRAINT pk_tb_clinicas_cnpj PRIMARY KEY(cnpj)
);

--consultando o objeto "tb_clinicas"
SELECT *
FROM tb_clinicas;

--Realizando uma carga de dados na "tb_clinicas"
INSERT INTO tb_clinicas(cnpj, nm_clinica)
VALUES
('01234043482', 'Clinica da Unimed'),
('45245645646', 'Clinica Santa Casa Saúde');

--Criando o 2° obj "tb_especialidades"
--Restrições pk aplicada a coluna "cod_especialidade"
CREATE TABLE tb_especialidades(
cod_especialidade 			INTEGER,
ds_especialidade			VARCHAR(40),
CONSTRAINT pk_tb_esp_cod_esp PRIMARY KEY(cod_especialidade)
);

SELECT *
FROM tb_especialidades;

INSERT INTO tb_especialidades(cod_especialidade, ds_especialidade)
VALUES
(1, 'Cardiologia'),
(2, 'Clinico Geral'),
(3, 'Ginecologia'),
(4, 'Mastologia'),
(5, 'Ortopedia');

--Criando 3° obj "tb_medicos"
--Restrição pk aplicada a coluna crm e uma 
--			fk aplicada a coluna "cod_especialidade"
CREATE TABLE tb_medicos(
crm 				VARCHAR(8),
cod_especialidade	INTEGER,
nm_medico			VARCHAR(60),
salario				NUMERIC(7,2),
CONSTRAINT pk_tb_medicos_crm PRIMARY KEY(crm),
CONSTRAINT fk_tb_medicos_cod_esp FOREIGN KEY(cod_especialidade)
	REFERENCES tb_especialidades(cod_especialidade)
);

SELECT *
FROM tb_medicos

INSERT INTO tb_medicos(crm, cod_especialidade, nm_medico, salario)
('12345678',12,'Sam',7000.00)

--Criando o 4° obj "tb_quartos"
--restrição pk aplicada a coluna "nr_quarto"
CREATE TABLE tb_quartos(
nr_quarto		INTEGER,
andar			INTEGER,
tamanho			FLOAT,
categoria		VARCHAR(10),
CONSTRAINT pk_tb_quartos_nr_quarto PRIMARY KEY(nr_quarto)
);