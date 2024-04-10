import React, { useState } from "react";
import Combobox from "react-widgets/Combobox";

import useLocation from "./useLocation.jsx";
import useWeatherApi from "./useWeatherApi.jsx";
import Weather from "./Weather.jsx";

function App() {
  const geo = useLocation();
  const api = useWeatherApi();
  const [selectedCity, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastPeriod, setForecastPeriod] = useState(0);

  const handleTodayForecast = (e) => {
    setForecastPeriod(e.target.id == "current-day" ? 1 : 6);
    api.fetchCityForecast(selectedCity).then((res) => {
      setWeatherData(res);
    });
  };

  return (
    <>
      <header className="header-container">
        <div id="city-panel">
          <h3>Прогноз погоды</h3>
          <Combobox
            data={geo.cities}
            placeholder="Выберите город"
            onChange={(value) => setCity(value)}
          />
        </div>
        <div id="button-panel">
          <button
            id="current-day"
            className="button"
            onClick={handleTodayForecast}
          >
            на сутки
          </button>
          <button
            id="five-days"
            className="button"
            onClick={handleTodayForecast}
          >
            на 5 дней
          </button>
        </div>
      </header>

      <Weather Forecast={weatherData} period={forecastPeriod} />
    </>
  );
}

export default App;
