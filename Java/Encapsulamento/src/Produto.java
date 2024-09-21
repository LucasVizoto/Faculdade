
public class Produto {
    //colocou o private para não modificarem teu código
    //private, public, protected, default (pacote = packadge | bloqueia a variável para arquivos fora do pacote atual )
    private int codigo, qtdd;
    private float nota;

    public Produto(){}

    //construtores
    public Produto(int codigo, int qtdd, float nota) {
        this.setCodigo(codigo);
        this.setQtdd(qtdd);
        this.setNota(nota);
        //this.nota=nota;
    }
    }
    public void setCodigo(int codigo){
        if(codigo>0){
            this.codigo = codigo;
        }
        else{
            System.out.println("Código Inválido");
        }
    }

    public void setQtdd(int qtdd){
        if(qtdd>=0){
            this.qtdd=qtdd;
        }
        else{
            System.out.println("Qtdd Inválida");
        }
    }
    public void setNota(float nota){
        if (nota>=0 && nota<=10){
            this.nota = nota ;
        }
        else{
            System.out.println("Nota Inválida");
        }
    }
    public int getCodigo(){
        return this.codigo;
    }
    public int getQtdd(){
        return this.qtdd;
    }
    public float getNota(){
        return this.nota;
    }
    private void produtosRuins(){
        if(this.nota<5){

        }
    }
}
