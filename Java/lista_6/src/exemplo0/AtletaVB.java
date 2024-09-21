package exemplo0;

public class AtletaVB implements Jogador_Volei,Jogador_Basquete{
    @Override
    public void lance_livre() {
        System.out.println("Chutou o lance livre");
    }

    @Override
    public void bandeja() {
        System.out.println("Fez a bandeja");
    }

    @Override
    public void sacar() {
        System.out.println("A pessoa sacou");
    }

    @Override
    public void cortar() {
        System.out.println("A pessoa Cortou");
    }
}
