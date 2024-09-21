import java.util.Date;
import java.util.List;

public class Reservation {
    private Number id;
    private Date date;
    Passenger passenger;
    Flight flight;

    private List<Flight> flightsInformation;
    public Reservation(){}
    public Reservation(Number id, Date date, Passenger passenger, Flight flight){
        setId(id);
        setDate(date);
        setFlight(flight);
        setPassenger(passenger);
    }

    public Number getId() {
        return id;
    }

    public void setId(Number id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Passenger getPassenger() {
        return passenger;
    }

    public void setPassenger(Passenger passenger) {
        this.passenger = passenger;
    }

    public Flight getFlight() {
        return flight;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }

    public void addFlightInfos(int id, String origin, String destination, Flight flight) {
        this.flightsInformation  .add(new Flight(id,origin, destination));
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + id +
                ", date=" + date +
                ", passenger=" + passenger +
                ", flight=" + flight +
                '}';
    }
}
