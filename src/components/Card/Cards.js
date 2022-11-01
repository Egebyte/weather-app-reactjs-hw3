import Card from "react-bootstrap/Card";
import { useCity } from "../../context/MainContext";
function Cards() {
  // Using context we declare which states we will be using in this component
  const { city, days, data } = useCity();

  // Handles data about dates and returns a string with day name
  const handleDate = (dateString) => {
    const dayIndex = new Date(dateString).getDay();
    return days[dayIndex];
  };

  return (
    // Creating a grid system using Bootstrap
    <div className="row card-container">
      {/* Shows the selected city */}
      <h1 className="col-sm-12 mb-3 city-header">{city.name}</h1>
      {/* Maps through the data and creates a card for each of it */}
      {data.map((el, i) => (
        <div key={i} className="col-sm-3 ">
          {/* i === 0 checks that if the day is today then if it is today it highlights that card with a border  */}
          <Card
            className={`mt-3 ${
              i === 0 && "border border-secondary border-3 rounded"
            }`}
          >
            {/* Calls handleDate with the current data's datetime */}
            <Card.Header>{handleDate(data[i].datetime)}</Card.Header>
            <Card.Body className="text-center text-secondary">
              {/* Using the weather.icon value of the current data changes the img */}
              <img
                src={`https://www.weatherbit.io/static/img/icons/${data[i].weather.icon}.png`}
                alt=""
                className="weather-icon"
              />
              <br />
              {/* First we take the temps and we parse it to floats then we round it up to the nearest integer value then we display them */}
              {`Max Temp: ${Math.round(
                parseFloat(data[i].max_temp)
              )}C° Min Temp: ${Math.round(parseFloat(data[i].min_temp))}C°`}
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Cards;
