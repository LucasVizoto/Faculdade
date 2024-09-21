// o controler controla a rota, enquanto quem interege com o banco é o sarvice
package unifacef.edu.primevideo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import unifacef.edu.primevideo.model.dto.FilmeDTO;
import unifacef.edu.primevideo.service.FilmeService;

import java.util.List;

//chama o Service
@RestController
@RequestMapping("/filme") //toda vez que derem um /filme o controller que responde
public class FilmeController {
    //injeção de dependencia
    @Autowired
    FilmeService injecao;

    @PostMapping
    public FilmeDTO insere(@RequestBody FilmeDTO filmeDTO){ //pra dizer que vai1 vir do request body
        return injecao.insere(filmeDTO);
    }

    @GetMapping
    public List<FilmeDTO> consultaTodos(){
        return injecao.consultaTodos();
    }

    @GetMapping("/{id}")
    public  FilmeDTO consultaPorId(@PathVariable Long id){
        return injecao.consultaPorid(id);
    }

    @DeleteMapping("/{id}")
    public String remove(@PathVariable Long id){
        return injecao.remove(id);
    }

    @PutMapping
    public List<FilmeDTO> atualizaNota10(){return injecao.atualizaNota10();}

    @PatchMapping("/{id}")
    public FilmeDTO atualizaId(Long id, FilmeDTO filmedto){return injecao.atualizaId(id, filmedto);}
}
