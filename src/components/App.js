import React from "react";
import "./../styles/App.css";
import Weather from "./Weather.js";
const App = () => {
  const inputData = [
    { temperature: 25, conditions: "sunny" },
    { temperature: 56, conditions: "hot" },
    { temperature: 12, conditions: "cold" },
    { temperature: 30, conditions: "warm" },
    { temperature: 18, conditions: "cloudy" },
    { temperature: 40, conditions: "humid" },
    { temperature: 5, conditions: "freezing" },
    { temperature: 22, conditions: "pleasant" },
    { temperature: 35, conditions: "dry" },
    { temperature: 28, conditions: "windy" },
  ];
   
  return (
    <span >
      {inputData.map((ele, idx) => (
        <Weather
          key={idx}
          temp={ele.temperature}
          cond={ele.conditions}
        ></Weather>
      ))}
      <p></p>
    </span>
  );
};

export default App;
