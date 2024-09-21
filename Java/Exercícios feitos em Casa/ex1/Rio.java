package ex1;

public class Rio {
        public String nome;
        public float nivel;
        public boolean poluido;

        //construtores
        public Rio(String nome, float nivel, boolean poluido){
            this.nome = nome;
            this.nivel = nivel;
            this.poluido = poluido;
        }

        //métodos
        public void chover(float indice_de_chuva){
            this.nivel += indice_de_chuva;
        }
        public void ensolarar (float evaporação){
            this.nivel -= evaporação;
        }
        public void limpar(){
            this.poluido = false;
        }
        public void sujar(){
            this.poluido = true;
        }

        public void imprimir(){
             System.out.println("Nome: "+this.nome+
                    " Nível: "+this.nivel+
                    " Poluido: "+this.poluido);
        }
    }

