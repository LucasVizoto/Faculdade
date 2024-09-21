package ex2;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String args[]){
        List<CartaoWeb> cartoes = new ArrayList<CartaoWeb>();
        cartoes.add(new Aniversario("Samuel"));
        cartoes.add(new DiaDosNamorados("Beatriz"));
        cartoes.add(new Natal("Lucas"));

        for (CartaoWeb item: cartoes){
            item.showMessage(); //polimorfismo pq o metodo pode exibir diversos resultados diferentes com esse loop
        }
    }
}
