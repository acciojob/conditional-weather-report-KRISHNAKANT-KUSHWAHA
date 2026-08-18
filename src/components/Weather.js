import React from "react";

const Weather = (props) => {
  // console.log(props);
  const tempStyle = {
    color: props.temp > 20 ? "red" : "blue",
  };
  return (
    <div>
      <p>
        Temperature:<span style={tempStyle}>{props.temp}</span>
      </p>
      <p>Conditions: {props.cond}</p>
    </div>
  );
};

export default Weather;
