import React, { useEffect, useState } from "react";
import { WeatherForm } from "./WeatherForm";
import { WeatherMainInfo } from "./WeatherMainInfo";
import styles from "../styles/WeatherApp.module.css";
import { Loading } from "./Loading";

//api url
const APP_URL = process.env.REACT_APP_URL;
const APP_KEY = process.env.REACT_APP_KEY;
const APP_URL_HOST = process.env.REACT_APP_URL_HOST;

function WeatherApp() {
  const [weather, setWeather] = useState(null);
  async function loadInfo(city = "paris,fr") {
    try {
      const request = await fetch(`${APP_URL}/${city}`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": APP_KEY,
          "X-RapidAPI-Host": APP_URL_HOST,
        },
      });
      const json = await request.json();

      // console.log(json);
      setWeather(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.response.profile.tz ?? ""}`;
  }, [weather]);

  //this function calls onCityChage in thge component WeatherForm
  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    </div>
  );
}

export { WeatherApp };
