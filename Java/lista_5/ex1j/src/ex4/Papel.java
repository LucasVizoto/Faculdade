package ex4;

public class Papel extends Coisa{
    @Override
    boolean tentativa(Coisa outraCoisa) {
        return outraCoisa instanceof Pedra;
    }

    @Override
    public String toString() {
        return "Papel";
    }
}

