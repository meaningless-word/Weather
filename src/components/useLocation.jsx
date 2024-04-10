import { useState, useEffect } from "react";
import useWeatherApi from "./useWeatherApi.jsx";

const useLocation = () => {
  const defaultCities = [
    "Москва",
    "Санкт-Петербург",
    "Новосибирск",
    "Екатеринбург",
    "Казань",
    "Нижний Новгород",
    "Челябинск",
    "Самара",
    "Уфа",
    "Ростов-на-Дону",
    "Омск",
    "Красноярск",
    "Воронеж",
    "Пермь",
    "Волгоград",
    "Краснодар",
    "Тюмень",
    "Саратов",
  ];
  const [userLocation, setUserLocation] = useState(null);
  const [cities, setCities] = useState(defaultCities);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const weatherApi = useWeatherApi();
          weatherApi
            .fetchGeoReverse(
              position.coords.latitude,
              position.coords.longitude
            )
            .then((res) => {
              const result = {
                name: res.name,
                local_name: res.local_names.ru,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              };
              setUserLocation(result);
              if (cities.toString().indexOf(res.local_names.ru) < 0)
                setCities([res.local_names.ru, ...cities]);
            });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return { userLocation, cities };
};

export default useLocation;
