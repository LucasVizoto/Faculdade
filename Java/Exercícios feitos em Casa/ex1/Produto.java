package ex1;

public class Produto {
    public String descricao;
    public int id, qtdd;
    public float preco;

    public Produto(String descricao, int id, int qtdd, float preco){
        this.descricao = descricao;
        this.id = id;
        this.qtdd = qtdd;
        this.preco = preco;
    }

    public void comprar(int x){
        this.qtdd+=x;
    }
    public void vender(int x){
        this.qtdd-=x;
        if (this.qtdd<x){
            System.out.println("Quantidade no estoque insuficiente");
        }
    }
    public void subir(float x){
        this.preco += x;
    }
    public void descer(float x){
        this.preco -= x;
    }
    public void imprimir(){
        System.out.println("Descrição do Produto: "+this.descricao+ "ID: "+this.id+"Quantidade em estoque: "+this.qtdd+"Preço do produto:"+ this.preco);

    }
}
