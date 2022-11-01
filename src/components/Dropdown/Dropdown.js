import React from "react";
import { useCity } from "../../context/MainContext";
function Dropdown() {
  // Using context we declare which states we will be using in this component
  const { city, citiesJSON, setCity } = useCity();

  // Handles the changes related to dropdawn
  const handleChange = (e) => {
    citiesJSON.map((city) => e.target.value === city.name && setCity(city));
  };
  return (
    <div>
      {/* Dropdown */}
      <select value={city.name} onChange={handleChange}>
        {/* Maps through all the data in citiesJSON and creates the dropdown */}
        {citiesJSON.map((el, i) => (
          <option key={i} value={el.name}>
            {el.name}
          </option>
        ))}
      </select>
    </div>
  );
}

// Exports
export default Dropdown;
