import React, { useState } from "react";
import "./../styles/App.css";
import Weather from "./Weather.js";
const App = () => {
  const [whether, setWeather] = useState({
    temperature: 5,
    conditions: "Sunny",
  });
  return (
    <span>
      <Weather temp={whether.temperature} cond={whether.conditions}></Weather>
    </span>
  );
};

export default App;
