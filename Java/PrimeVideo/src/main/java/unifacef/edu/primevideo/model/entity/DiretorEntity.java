package unifacef.edu.primevideo.model.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity // indica que é uma entidade
@Table(name="Diretor") //cria a tabela no banco
public class DiretorEntity {
    @Id //define a PK
    @GeneratedValue(strategy = GenerationType.IDENTITY) //estratégia de como se comporta a geração automática da PK
    private Long id;

    @Column(name="nome")
    private String nome;

    @OneToMany(mappedBy = "Diretor", cascade = CascadeType.ALL, orphanRemoval = true) //quando eu eliminar um diretor, todos os filmes associados a ele serão eliminados
    //composição
    private List<FilmeEntity> filmes = new ArrayList<FilmeEntity>();

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

    public List<FilmeEntity> getFilmes() {
        return filmes;
    }

    public void setFilmes(List<FilmeEntity> filmes) {
        this.filmes = filmes;
    }
}
