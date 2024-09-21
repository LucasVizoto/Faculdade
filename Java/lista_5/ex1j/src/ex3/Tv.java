package ex3;

public class Tv extends Produto{
    private float canal;
    public Tv(float canal, int serial, int volume, String texto){
        super(serial, volume, texto);
        trocaCanal(canal);
    }

    public float getCanal() {
        return canal;
    }

    public void trocaCanal(float canal) {
        this.canal = canal;
    }
    public String Assistir(){
        return "Assistindo: " + getCanal();
    }
    @Override
    public String toString() {
        return "Tv{" +
                super.toString()+
                "canal=" + canal +
                '}';
    }
}