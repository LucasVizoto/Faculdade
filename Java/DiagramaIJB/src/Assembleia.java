import java.util.Scanner;

public class Assembleia {
    Cadastro cadastroAnalisado;

    //Sacnner para fazer leitura no terminal
    Scanner scanner = new Scanner(System.in);
    private int decisaoAssembleia;

    //decisão para simbolizar a reunião realizada pelos voluntários do IJB para decidir se uma pessoa foi aprovada ou não
    public boolean decisao() {
        boolean decid = false;
        do {
            //elicita informações do usuário para que ele diga caso aprovado ou reprovado com 1 e 2
            System.out.println("Decisão final da assembleia (1. Aprovado) (2. Reprovado): ");
            decisaoAssembleia = Integer.parseInt(scanner.nextLine());
            switch (decisaoAssembleia) {
                case 1:
                    decid = true; //recebe true para aprovado
                case 2:
                    continue; //já foi inicializada como falsa, por isso só vai continuar
                default:
                    System.out.println("Caracter inválido");
            }
        } while (decisaoAssembleia != 1 || decisaoAssembleia != 2);
        return decid;
    }

    //metodo para ordenar a lista de acordo com a decisão na assembleia
    public void ordenar(Cadastro cadastro){

    }
    public void decisaoTipoDeProjeto(){
        System.out.println("Na assembleia é decidido o tipo de Projeto que será executado (casa de Aluguel ou Casa Própria)");
    }
}

