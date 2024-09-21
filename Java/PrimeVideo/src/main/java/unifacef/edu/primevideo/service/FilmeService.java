package unifacef.edu.primevideo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import unifacef.edu.primevideo.model.dto.FilmeDTO;
import unifacef.edu.primevideo.model.entity.FilmeEntity;
import unifacef.edu.primevideo.model.repository.FilmeRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service //avisar que a classe é um serviço, e que usa um CRUD
//aqui vai ter a implementação do crud e o controller que vai chamar
public class FilmeService {
    // injeção de dependencia
    @Autowired
    FilmeRepository injecao;

    @Autowired
    ConversorService conversor;
    //basicamente vai chama os métodos que permitem alterações no banco de dados

    public FilmeDTO insere (FilmeDTO filmeDTO){
        //convertemos um FilmeDTO em FilmeEntity para inserir no DB
        // o método está sendo chamado sem necessidade de instanciar o objeto
        //INSERT
        //convertemos FilmeEntity em FilmeDTO para devolver ao Front-End
        FilmeEntity entidade = conversor.converteFilmeDTO(filmeDTO);
        FilmeEntity resposta = injecao.save(entidade);  //vai salvar no banco, por isso o converteDTO (pois ele jogs pra Entity)
        return conversor.converteFilmeEntity(resposta); // retorna o Dto do que foi pego no DB
        //injeção.save faz a captura do dto e lança com filme entity
    }

    //select from no db
    //retorna todos os filmes - lista de filmes

    public List<FilmeDTO> consultaTodos(){
            List<FilmeEntity> filmes = injecao.findAll();
            return filmes.stream().map(conversor::converteFilmeEntity).collect(Collectors.toList());
            //montou uma lista com elementos de FilmeDTO. Para cada elemento de FilmeEntity
         //retorna uma lista de filmeEntity mas precisa retornar uma lista de filmeDTO
        //para fazer essa conversão deverá ser feita uma estrutura de repetição qeu chama varias vezes o converteDTO
    }
    //retorna um filme em específico filtrado por id
    public FilmeDTO consultaPorid(Long id){
        //retorna um valor opcional pois pode encontrar ou não, ou seja, retorna um Optional
        Optional<FilmeEntity> optional = injecao.findById(id);
        if (optional.isPresent()){ //isPresent significa ("se ele achou ...")
            return conversor.converteFilmeEntity(optional.get());
        }
        else return null; //não achou
    }

    //remove um filme por id
    public String remove (Long id){
        if (injecao.existsById(id)){ //se existe ...
            injecao.deleteById(id); //id deletado
            return "Remoção realizada com SUCESSO!!";
        }else{
            return "Filme não encontrado";
        }
    }

    public List<FilmeDTO> atualizaNota10(){ //exemplo de PUT Maping (update)
        List<FilmeEntity> filmes = injecao.findAll(); //pega todos os filmes e coloca numa lista
        for(FilmeEntity filme: filmes) { //para cada filme percorrendo na lista filmes
            filme.setNota(10);
            injecao.save(filme); //setou como 10 em cima e usou o save para atualizar no DB
        }
        return converteEntities(filmes); //retornando o DTO para o front
    }
    public FilmeDTO atualizaId (Long id, FilmeDTO filmedto){ // exemplo de PatchMapping (update com Where)
        if(injecao.existsById(id)){ //verifica se o filme existe
            filmedto.setId(id); // defino o id do objeto para aterar
            // 1° converte filmeDTO em filmeEntity
            // 2° converte filmeEntity no BD
            // 3° converte filmeEntity em filmeDTO e retorno
            return conversor.converteFilmeEntity(injecao.save(conversor.converteFilmeDTO(filmedto)));
        }else{
            return null; //filme não existe
        }
    }

    public List<FilmeDTO> converteEntities(List<FilmeEntity> filmesEntities){
        //cria uma lista de FilmeDTO
        List<FilmeDTO> filmeDTOs = new ArrayList<FilmeDTO>();

        //percore filmeEntities
        for(FilmeEntity filmeEntity: filmesEntities){
            filmeDTOs.add(conversor.converteFilmeEntity(filmeEntity));
        }
        return filmeDTOs;
    }

}
