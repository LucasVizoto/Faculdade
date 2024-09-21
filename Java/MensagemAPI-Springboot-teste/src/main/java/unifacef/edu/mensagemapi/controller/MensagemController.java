package unifacef.edu.mensagemapi.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class MensagemController { //essa classe controla as requisições REST
    //para acessar localhost:8080/endpoint-criado
    //criando rotas no local
     @GetMapping("/dia") //localhost:8080/dia
    public String bomDia(){
         return "Bom dia";
     }
     @GetMapping("/noite") //localhost:8080/noite
    public String boaNoite(){
         return "Boa Noite";
     }
    @GetMapping("/tarde") //endpoint
    public String boaTarde(){
        return "Boa Tarde";
    }

    @PostMapping("/insere")
    public String insere(@RequestBody String teste){
 /*colocar isso no post com body em json
      * {
	    "nome": "Bolinha de Golfe",
	    "descricao": "Bolinha",
	    "qtdd" : 2,
	    "preco" : 12
        //isso daqui está no front e queremos mandar pro back end
        }
*/
         return "Exemplo de um INSERT no banco de dados" + teste + "arroz";
    }

    @DeleteMapping("/remove")
    public String remove(){
         return "Exemplo de DELETE no banco de dados";
    }

    @PutMapping("/put")
    public String put(){
         return "Exemplo de UPDATE (geral) no banco de dados";
    }

    @PatchMapping("/patch/{id}")
    public String patch(@PathVariable int id){
         return "Exemplo de de um update com a cláusula  where id"+ id + " no banco de dados";
    }

}
