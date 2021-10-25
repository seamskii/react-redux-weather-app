import { useEffect, useState } from "react";
import { WeatherDay } from "../WeatherDay/WeatherDay";
import styles from "./weatherWeek.module.css";
import { LocationSearch } from "../LocationSearch/LocationSearch";
import { fetchWeekData } from "../mockApi";
import { Layout, PageHeader, Button } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const setLike=()=>{
  console.log("like");
}

export const WeatherWeek = () => {
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
      const fiveDaysData = fetchWeekData(location);
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
      <div className={styles.searchWraper}>
        <LocationSearch
          onCityFound={(cityInfo) => {
            setLocationKey(cityInfo.key);
            setLocation(cityInfo.name);
          }}
        />
      </div>
      <div className={styles.likeButton}>
        <h1>{location}</h1>
        <div className={styles.likeButton}>
          <HeartOutlined style={{ fontSize: 33, marginRight: 10 }} />
          <Button type="primary" onClick={()=>setLike()}>Primary Button</Button>
        </div>
      </div>

      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 380 }}
      >
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
    </div>
  );
};
