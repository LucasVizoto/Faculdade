package unifacef.edu.primevideo.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="gerente")
public class GerenteEntity extends FuncionarioEntity { //extend da Inheritance pai (Funcionário)

    private String departamento;

    // Getters e Setters
}