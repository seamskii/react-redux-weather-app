import { useEffect, useState } from "react";
import { WeatherDay } from "../WeatherDay/WeatherDay";
import styles from "./styles.module.css";
import { LocationSearch } from "../LocationSearch/LocationSearch";
import { fetchFiveDays } from "../Services/api";
import { fetchApi } from "../mockApi";

export const App = () => {
  const [locationKey, setLocationKey] = useState("");
  const [weatherInfo, setWeatherInfo] = useState();
  const [location, setLocation] = useState("");
  const [iconPhrase, setIconPhrase] = useState("");

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
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    if (locationKey) {
      const fiveDaysData = fetchApi();
      fiveDaysData.then((res) => {
        console.log(res);
        setIconPhrase(res.DailyForecasts[0].Day.IconPhrase);
        setWeatherInfo(
          res.DailyForecasts.map((df) => {
            return {
              min: df.Temperature.Minimum.Value,
              max: df.Temperature.Maximum.Value,
              weatherType: df.Day.IconPhrase,
              weatherKey: padNum(df.Day.Icon),
              dayOfWeek: daysOfWeek[new Date(df.Date).getDay()],
            };
          })
        );
      });
    }
  }, [locationKey, iconPhrase]);

  return (
    <div>
      <LocationSearch
        onCityFound={(cityInfo) => {
          setLocationKey(cityInfo.key);
          setLocation(cityInfo.name);
        }}
      />
      <h1>{location}</h1>
      <h2>{iconPhrase}</h2>
      <div className={styles.main}>
        {!!weatherInfo &&
          weatherInfo.map((i, index) => (
            <div className={styles.day} key={index}>
              <WeatherDay
                min={i.min}
                max={i.max}
                weatherType={i.weatherType}
                weatherKey={i.weatherKey}
                dayOfWeek={i.dayOfWeek}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
