import axios from "axios";

const useWeatherApi = () => {
  const weatherApiId = "5eeaec6c48efa194f375266b303a84b7";

  const fetchGeoReverse = async (lat, lon) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${weatherApiId}`
      );
      return response.data[0];
    } catch (error) {
      console.error("Error fetching city name:", error);
      return null;
    }
  };

  const fetchGeoDirect = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&lang=ru&appid=${weatherApiId}`
      );
      const { lat, lon } = response.data[0];
      return { city, lat, lon };
    } catch (error) {
      console.error("Error fetching city coordinates:", error);
      return null;
    }
  };

  const fetchCityForecast = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=${weatherApiId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching city forecast:", error);
      return null;
    }
  };

  return { fetchGeoReverse, fetchGeoDirect, fetchCityForecast };
};

export default useWeatherApi;
