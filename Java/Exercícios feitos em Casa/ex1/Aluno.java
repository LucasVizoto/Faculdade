package ex1;

public class Aluno {
    public int numeroAluno, idade;
    public String nome;
    public float p1, p2;

    //construtores
    public Aluno(String nome, int numeroAluno, int idade, float p1, float p2){
        this.nome = nome;
        this.numeroAluno = numeroAluno;
        this.idade = idade;
        this.p1 = p1;
        this.p2 = p2;
    }


    //métodos
    public float notaFinal(){
        return (this.p1+this.p2)/2;
    } //void não retorna nada, o tipo do meio é o que vai voltar


    //print exibindo dados
    public String dadosAluno(){
        return "Nome: " + this.nome +
                " Número Aluno: " + this.numeroAluno +
                " Idade: " + this.idade;
    }


    //verifica se passou executando o método
    public void passou(){
        if (this.notaFinal()>=7){
            System.out.println("Aluno passou");
        }
        else{
            System.out.println("Aluno não passou");
        }
    }

}