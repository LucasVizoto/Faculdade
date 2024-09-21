public class carItem {
    private int id, quantity;
    Product product;
    //aqui tem as informações do produto, criando quase que um import
    //um objeto-parte dentro do objeto-todo

    //associação fraca - agregação
    public carItem(int id, int qtdd, Product product){
    this.setId(id);
    this.setQuantity(qtdd);
    this.setProduct(product);
    }
    public carItem(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public String toString() {
        return "carItem{" +
                "id=" + id +
                ", quantity=" + quantity +
                ", product=" + product + //nessa parte do toString ele vai chamar o toString do product
                '}';
    }
}
