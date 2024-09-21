package exemplo0;

public class AtletaFV implements Jogador_Volei,Jogador_Futebol{
    //uma interface é basicamene um modelo que pode ser utilizado posteriormente
    //a classe que recebe essa interface, vai receber métodos vazios a serem completados
    //praticamente um contrato. "Você quer ser um jogador? Então você precisa saber disso"

    @Override
    public void escanteio() {
        System.out.println("Bateu o Escanteio");
    }

    @Override
    public void penalti() {
        System.out.println("Bateu o Penalti");
    }

    @Override
    public void sacar() {
        System.out.println("A pessoa Sacou");
    }

    @Override
    public void cortar() {
        System.out.println("Cortou");
    }
}
