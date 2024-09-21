package ex4;

import java.util.Random;

public class Jogo {

    static Coisa pedra = new Pedra();
    static Coisa papel = new Papel();
    static Coisa tesoura = new Tesoura();

    static Coisa jogo() {
        Random random = new Random();
        int rand = random.nextInt(3);

        switch (rand) {
            case 0:
                return pedra;
            case 1:
                return papel;
            default:
                return tesoura;

        }
    }
}



