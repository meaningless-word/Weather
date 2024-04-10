import React from "react";

import "../styles/WeatherRow.css";

const WeatherRow = (props) => {
  const d = new Date(props.stuff.dt * 1000);
  const temp_min = Math.round(parseFloat(props.stuff.main.temp_min));
  const temp_max = Math.round(parseFloat(props.stuff.main.temp_max));
  const description = props.stuff.weather[0].description;
  const pressure = Math.round(
    0.75006375541921 * parseInt(props.stuff.main.pressure)
  );
  const humidity = props.stuff.main.humidity;
  const wind_speed = Math.round(10 * parseFloat(props.stuff.wind.speed)) / 10;
  const wind_direction = ["С", "СВ", "В", "ЮВ", "Ю", "ЮЗ", "З", "СЗ", "С"][
    Math.floor((parseInt(props.stuff.wind.deg) + 22.5) / 45) % 8
  ];
  const feels_like =
    Math.round(10 * parseFloat(props.stuff.main.feels_like)) / 10;

  return (
    <tr key={props.stuff.dt}>
      <td>
        <div className="cell-hidy">{d.toLocaleTimeString().slice(0, 5)}</div>
        <div className="cell-tt">
          <span>{temp_min} °C</span>
          <span className="btw"> ... </span>
          <span>{temp_max} °C</span>
        </div>
      </td>
      <td>
        <div className="cell-container">{description}</div>
      </td>
      <td>
        <div className="cell-container">{pressure}</div>
      </td>
      <td>
        <div className="cell-container">{humidity}%</div>
      </td>
      <td>
        <div className="cell-container">
          <div className="cell-wind">
            <span>{wind_speed}</span>&nbsp;
            <span className="cell-tiny">{wind_direction}</span>
          </div>
        </div>
      </td>
      <td>
        <div className="cell-container">{feels_like} °C</div>
      </td>
    </tr>
  );
};

export default WeatherRow;
