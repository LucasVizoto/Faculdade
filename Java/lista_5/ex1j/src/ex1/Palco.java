package ex1;

public class Palco {
    private Ator ator = new AtorFeliz();

    public void altera() {
        if (ator instanceof AtorFeliz) {
            ator = new AtorTriste();
        } else {
            ator = new AtorFeliz();
        }
    }

    public void atuar() {
        ator.ato(); //aqui ocorre o Polimorfismo (o objeto ator vai executaro ato de quem?? DEPENDE, e isso prova que é polimorfismo)
    }
}