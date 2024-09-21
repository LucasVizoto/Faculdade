public class Aluno {
    private int nroAluno, idade;
    private String nome;
    private float p1, p2;

    public Aluno() {
    }

    public Aluno(int nroAluno, int idade, String nome, float p1, float p2) {
        this.nroAluno = nroAluno;
        this.idade = idade;
        this.p1 = p1;
        this.p2 = p2;
        this.nome = nome;
    }


    public void notaFinal(){
        System.out.println("A média final do aluno é: " + (p1+p2)/2);
    }

   public void imprimir(){
       System.out.println("Nome: "+ this.nome + "p1: "+this.p1+"p2: "+this.p2+
               "Idade: "+ this.idade + "nroALuno: "+ this.nroAluno);
   }

    public int getNroAluno() {
        return nroAluno;
    }

    public void setNroAluno(int nroAluno) {
        if (String.valueOf(6).length() == 6) {
            this.nroAluno = nroAluno;
            return;
        }
        System.out.println("Número Inválido");
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        if (nome.length() <= 30) {
            this.nome = nome;
            return;
        }
        System.out.println("quantidade de caracteres Inválido");
    }


    public float getP1() {
        return p1;
    }

    public void setP1(float p1) {
        if (p1 >= 0) {
            this.p1 = p1;
        } else {
            System.out.println("Não pode ser negativo");
        }
    }

    public float getP2() {
        return p2;
    }

    public void setP2(float p2) {
        if (p2 >= 0) {
            this.p2 = p2;
        } else {
            System.out.println("Não pode ser negativo");
        }
    }
}
