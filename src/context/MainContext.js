import { useContext, createContext, useState, useEffect } from "react";
import citiesJSON from "../data/cities.json";
import axios from "axios";
const MainContext = createContext();

function MainProvider({ children }) {
  // Defining states and variables
  const [city, setCity] = useState(citiesJSON[8]);
  const [data, setData] = useState([]);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // API key and url for API
  const API_KEY = "f237ca48dcf24e56abd149bd737b780d";
  const URL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${city.latitude}&lon=${city.longitude}&days=8&key=${API_KEY}`;

  // Everythime the city state mounts or updates gets the data from API and updates the data state
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => setData(response.data.data))
      .catch((e) => console.log(e));
  }, [city]);

  // Object that we sent to provider
  const values = {
    city,
    setCity,
    data,
    setData,
    citiesJSON,
    days,
  };
  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
}

// Context function
const useCity = () => useContext(MainContext);

// Exports
export { MainProvider, useCity };
