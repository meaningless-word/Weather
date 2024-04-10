import React, { useState } from "react";
import Table from "react-bootstrap/Table";

import WeatherGroup from "./WeatherGroup";
import WeatherRow from "./WeatherRow";

import "../styles/Weather.css";

const Weather = (props) => {
  const L = props.Forecast ? props.Forecast.list : null;
  let d = new Date(0);
  let stopDate = new Date();
  stopDate = stopDate.setDate(stopDate.getDate() + props.period);

  const changeDate = L
    ? L.map((item, index) => {
        let dt = new Date(item.dt * 1000);
        let res =
          dt.toLocaleString("ru", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }) !=
          d.toLocaleString("ru", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });
        d = res ? dt : d;
        return { dt, d, res };
      })
    : [];
  const visiblePeriod = L ? L.filter((e) => e.dt <= stopDate / 1000) : null;

  return (
    <>
      {visiblePeriod ? (
        <Table striped bordered hover className="table-container">
          <tbody>
            {visiblePeriod.map((w, i) => (
              <>
                {changeDate[i].res ? <WeatherGroup stuff={w} /> : null}
                <WeatherRow stuff={w} />
              </>
            ))}
          </tbody>
        </Table>
      ) : null}
    </>
  );
};

export default Weather;
