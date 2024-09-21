package unifacef.edu.primevideo.model.dto;

//classe que faz a comunicação com o banco, front para DB
//Para que o usuário não tenha acesso ao banco de dados, usa-se isso
public class FilmeDTO {
    private long id;
    private String nome;
    private int anoLancamento;
    private float nota;
    private DiretorDTO diretor;
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getAnoLancamento() {
        return anoLancamento;
    }

    public void setAnoLancamento(int anoDeLancamento) {
        this.anoLancamento = anoDeLancamento;
    }

    public float getNota() {
        return nota;
    }

    public void setNota(float nota) {
        this.nota = nota;
    }

    public DiretorDTO getDiretor() {
        return diretor;
    }

    public void setDiretor(DiretorDTO diretor) {
        this.diretor = diretor;
    }
}
