package ex3;

public class Radio extends Produto {
    private float estacao;
    private String banda;

    public Radio(float estacao, String banda, int serial, int volume, String texto) {
        super(serial, volume, texto);
        trocaEstacao(estacao);
        trocaBanda(banda);
    }

    public float getEstacao() {
        return estacao;
    }

    public void trocaEstacao(float estacao) {
        this.estacao = estacao;
    }

    public String getBanda() {
        return banda;
    }

    public void trocaBanda(String banda) {
        this.banda = banda;
    }

    public String Escutar(){
        return "Escutado: " + getBanda() + getEstacao();
    }

    @Override
    public String toString() {
        return "Radio{" +
                super.toString()+
                "estacao=" + estacao +
                ", banda='" + banda + '\'' +
                '}';
    }
}