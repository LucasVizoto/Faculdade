package ex3;
import java.util.Random;
public class Produto{
    private int serial, volume;
    private String texto;
    Random random = new Random();

    public Produto(int serial, int volume, String texto) {
        setSerial(serial);
        setVolume(volume);
        setTexto(texto);
    }
    public boolean testaUnidade(){
        setTexto("Não testado");
        int random_number = random.nextInt(101);
        if (random_number<=90){
            setTexto("Aprovado");
            return true;
        }else{
            setTexto("Reprovado");
            return false;
        }

    }

    public int getSerial() {
        return serial;
    }

    public void setSerial(int serial) {
        this.serial = serial;
    }

    public int getVolume() {
        return volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    @Override
    public String toString() {
        return "Produto{" +
                "serial=" + serial +
                ", volume=" + volume +
                ", texto='" + texto + '\'' +
                ", resultado do teste" + testaUnidade()+
                '}';
    }
}