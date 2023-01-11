import React from "react";
import styles from "../styles/WeatherMainInfo.module.css";

function WeatherMainInfo({ weather }) {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>{`${weather?.response.profile.tz}`}</div>
      <div
        className={styles.location}
      >{`Condition: ${weather?.response.ob.weatherPrimary}`}</div>
      <div className={styles.current}>{`${weather?.response.ob.tempC} °C`}</div>

      <div className={styles.row}>
        <div
          className={styles.condition}
        >{`Wind Speed: ${weather?.response.ob.windSpeedKPH} KPH`}</div>
        <div
          className={styles.condition}
        >{`Wind Speed: ${weather?.response.ob.windSpeedMPH} MPH`}</div>
        <div>
          {/* <img
          src={`${weather?.response.ob.icon}`}
          width="128"
          alt={`${weather?.response.ob.weatherPrimary}`}
        /> */}
        </div>
      </div>
      <iframe
        title="map"
        src={`https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d54080.05747732771!2d${weather?.response.loc.long}!3d${weather?.response.loc.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1svillacoublay%2Fvel!5e0!3m2!1sen!2sbg!4v1673368446762!5m2!1sen!2sbg`}
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
  );
}
export { WeatherMainInfo };
