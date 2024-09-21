-- É aqui que criaremos os objetos a partir do DER lógico
CREATE TABLE tb_curso(
cod_curso      INTEGER,
nm_curso       VARCHAR(40),
CONSTRAINT pk_tb_curso_cod_curso PRIMARY KEY(cod_curso) --pk é a abreviação para primary key, por consenço utiliza-se isso
);

--consultando a tb_curso
SELECT *
FROM tb_curso

--Criando 2° obj - "tb_aluno"
--Restrição PK APLICADA A COLUNA "COD_ALUNO"
--			FK aplicada a coluna "cod_curso"

CREATE TABLE tb_aluno(
cod_aluno           INTEGER,
cod_curso			INTEGER,
nm_aluno			VARCHAR(40),
CONSTRAINT pk_tb_aluno_cod_aluno PRIMARY KEY(cod_aluno),
CONSTRAINT fk_tb_aluno_cod_curso FOREIGN KEY(cod_aluno)
	REFERENCES tb_curso(cod_curso)
);

--pra você rodar um trecho mais abaixo, seleciona com o mouse e roda


--Criando 3° obj tabela departamento
--Restrição: PK aplicada a coluna cod_departamento
CREATE TABLE tb_departamento(
cod_departamento		INTEGER,
nm_departamento			VARCHAR(40),
CONSTRAINT pk_tb_depto_cod_depto PRIMARY KEY(cod_departamento)
);

--Criação da 4° tabela Disciplina
--Restrição: PK aplicada a coluna cod_displina
--		      FK aplicada a coluna cod_departamento

CREATE TABLE tb_disciplina(
cod_disciplina 			INTEGER,
cod_dpto				INTEGER,
nm_disciplina			VARCHAR(40),
credito					INTEGER,
CONSTRAINT pk_tb_disciplina_cod_disciplina PRIMARY KEY(cod_disciplina),
CONSTRAINT pk_tb_disciplina_cod_dpto FOREIGN KEY(cod_dpto)
	REFERENCES tb_departamento(cod_departamento)
);

--Criação da 5° tabela Grade
--Restrição: PK composta aplicada as colunas cod_curso + cod_disciplina 
--			 FK aplicada a coluna cod_curso
--			 FK aplicada a coluna cod_disciplina

CREATE TABLE tb_grade(
cod_curso		INTEGER, --declara oq vai ser usado
cod_disciplina	INTEGER,
--restrições aplicadas 
CONSTRAINT pk_tb_grade_cod_curso_cod_disc PRIMARY KEY(cod_curso, cod_disciplina),
CONSTRAINT fk_tb_grade_cod_curso FOREIGN KEY(cod_curso)
	REFERENCES tb_curso(cod_curso), --refereces mostra de onde vai pegar (import from)
CONSTRAINT fk_tb_grade_cod_disciplina FOREIGN KEY(cod_disciplina) --foreign (chave estrangeira)
	REFERENCES tb_disciplina(cod_disciplina)
);

--Criação da 6° tabela pre requisitos
--Restrições: PK composta aplicada a coluna cod_disciplina_liberada + cod_disciplina_liberadora
--			  FK aplicada a coluna cod_disciplina_liberada
--			  FK aplicada a cula cod_disciplina_liberadora
CREATE TABLE tb_pre_requisitos(
cod_disciplina_liberada		INTEGER,
cod_disciplina_liberadora	INTEGER,
CONSTRAINT pk_tb_pre_requisitos_liberada_liberadora PRIMARY KEY(cod_disciplina_liberada, cod_disciplina_liberadora),
CONSTRAINT fk_tb_pre_requisitos_liberada FOREIGN KEY(cod_disciplina_liberada)
	REFERENCES tb_disciplina(cod_disciplina),
CONSTRAINT fk_tb_pre_requisitos_liberadora FOREIGN KEY(cod_disciplina_liberadora)
	REFERENCES tb_disciplina(cod_disciplina)
);
