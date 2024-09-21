package ex4;

public class Pedra extends Coisa{
    @Override
    boolean tentativa(Coisa outraCoisa) {
        return outraCoisa instanceof Tesoura;
    }

    @Override
    public String toString() {
        return "Pedra";
    }
}
