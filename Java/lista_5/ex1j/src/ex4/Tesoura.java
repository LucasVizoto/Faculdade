package ex4;

public class Tesoura extends Coisa{
    @Override
    boolean tentativa(Coisa outraCoisa) {
        return outraCoisa instanceof Papel;
    }

    @Override
    public String toString() {
        return "Tesoura";
    }
}