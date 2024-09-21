package unifacef.edu.primevideo.model.entity;
//adicionado model e entity para deixar o projeto mais organizado

import jakarta.persistence.*;

@Entity // Isso indica que é uma entidade de um banco de dados
@Table(name = "filme") //está relacionada a tabela 'filme' do banco de dados
//filme é algo que tem no db

public class FilmeEntity {
    @Id //indica que essa é a chave primaria do Banco
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Gera automaticamente o valor e a estratégia para gerar
    // é passada como em Identidade, onde é gereado um novo pra cada pessoa
    private Long id;

    @Column(name = "nome") //recebe a coluna da tabela
    private String nome;
    @Column(name = "anoLancamento")
    private int anoLancamento;
    @Column(name = "nota")
    private float nota;

    // fetch lazy é preguiçoso, pois quando busca o entity, ele traz os dados sem o diretor, mas se vocÊ pedir ele traz
    // fetch eager traz junto
    @ManyToOne (fetch = FetchType.LAZY)
    @Column(name = "diretor_id")
    private DiretorEntity diretor;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public void setAnoLancamento(int anoLancamento) {
        this.anoLancamento = anoLancamento;
    }

    public float getNota() {
        return nota;
    }

    public void setNota(float nota) {
        this.nota = nota;
    }

    public DiretorEntity getDiretor() {
        return diretor;
    }

    public void setDiretor(DiretorEntity diretor) {
        this.diretor = diretor;
    }
}
