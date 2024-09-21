package ex4;

import static ex4.Jogo.jogo;
//String user  = JOptionPane.showInputDialog("Digite 1 , Digite 2, Digite 3")
// este comentário cria um prompt que recebe um dato no Java
public class Main {
    public static void main(String args[]){
        Coisa c1 = jogo();
        Coisa c2 = jogo();

        System.out.println(c1);
        System.out.println(c2);

        if(c1.tentativa(c2)){
            System.out.println(c1 + " ganhou de " + c2);
        } else if (c2.tentativa(c1)) {
            System.out.println(c2+" ganhou de "+c1);
        }else{
            System.out.println("Empatou");
        }
    }
}

