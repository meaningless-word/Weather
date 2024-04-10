import React from "react";
import "../styles/WeatherGroup.css";

const WeatherGroup = (props) => {
  const d = new Date(props.stuff.dt * 1000);
  const monthGenitiveName = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  return (
    <tr key={props.stuff.dt * 1000}>
      <td colSpan={2}>
        <div className="day-container">
          <span className="day-num">{d.getDate()}</span>
          <span className="day-week">
            <span>{monthGenitiveName[d.getMonth()]},</span>
            <span>
              {d.toLocaleString("ru", {
                weekday: "long",
              })}
            </span>
          </span>
        </div>
      </td>
      <td>
        <div className="day-container">
          <span className="day-condition">Давление, мм рт. ст.</span>
        </div>
      </td>
      <td>
        <div className="day-container">
          <span className="day-condition">Влажность</span>
        </div>
      </td>
      <td>
        <div className="day-container">
          <span className="day-condition">Ветер, м/с</span>
        </div>
      </td>
      <td>
        <div className="day-container">
          <span className="day-condition">Ощущается как</span>
        </div>
      </td>
    </tr>
  );
};

export default WeatherGroup;
