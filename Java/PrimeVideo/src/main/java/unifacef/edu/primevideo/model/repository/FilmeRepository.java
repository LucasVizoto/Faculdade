package unifacef.edu.primevideo.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import unifacef.edu.primevideo.model.entity.FilmeEntity;

public interface FilmeRepository extends
    JpaRepository<FilmeEntity, Long>{
    //indica que o valor a ser usado no banco é o Entity

    // esta inteface vai herdar todos os métodos de CRUD
    //relacionado a FilmeEntity
    // create, retrieve, update, delete
    //Sempre que for usar uma das operações de crud, usar FilmeRepository
    }

