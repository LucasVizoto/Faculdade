public class Person {
    private String name, user;
    private int id;
    public Person(){}
    public Person(String name, String user, int id){
        setName(name);
        setUser(user);
        setId(id);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", user='" + user + '\'' +
                ", id=" + id +
                '}';
    }
}
