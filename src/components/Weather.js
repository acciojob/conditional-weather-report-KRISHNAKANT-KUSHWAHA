import React from "react";

const Weather = (props) => {
  console.log(props);

  return (
    <div>
      {<p>{props.temp}</p>}
      {<p>{props.cond}</p>}
    </div>
  );
};

export default Weather;
