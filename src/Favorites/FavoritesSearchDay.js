import React from "react";
import { useEffect, useState } from "react";
import { fetchSingleCity } from "../mockApi";
import { WeatherDay } from "../WeatherDay/WeatherDay";
import styles from "./favorites.module.css";

export const FavoritesSearchDay = ({ city }) => {
  const [weatherOneDayInfo, setWeatherOneDayInfo] = useState([]);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const padNum = (num) => {
    const stringNum = num + "";
    const stringLen = stringNum.length;

    if (stringLen === 1) {
      return "0" + stringNum;
    } else {
      return stringNum;
    }
  };
  useEffect(() => {
    const oneCity = fetchSingleCity(city);
    oneCity.then((res) => {
      console.log(res);
      setWeatherOneDayInfo(
        <WeatherDay
          oneDay={true}
          imperial={res[0].Temperature.Imperial.Value}
          weatherType={res[0].WeatherText}
          weatherKey={padNum(res[0].WeatherIcon)}
          dayOfWeek={
            daysOfWeek[new Date(res[0].LocalObservationDateTime).getDay()]
          }
        />
      );
    });
  }, []);

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 380 }}
    >
      {<div className={styles.day}>{weatherOneDayInfo}</div>}
    </div>
  );
};
