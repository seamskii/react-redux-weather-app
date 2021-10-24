import { useEffect, useState } from "react";
import { WeatherDay } from "../WeatherDay/WeatherDay";
import styles from "./favorites.module.css";
import { fetchSingleCity } from "../mockApi";
import { PageHeader, Button, Descriptions } from "antd";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { FavoritesSearchDay } from "./FavoritesSearchDay";

const { Header, Content, Footer } = Layout;

export const Favorites = () => {

  const [weatherOneDayInfo, setWeatherOneDayInfo] = useState();
  const [favourites, useFavourites] = useState(["moscow", "haifa", "elat"]);


const citysArr = ["moscow", "haifa", "elat"];
const arr=<FavoritesSearchDay citysArr={favourites}/>
  console.log(arr);
  

  return (
    <div>
      <div className={styles.searchWraper}></div>

      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 380 }}
      >
        <div className={styles.main}>
          {!!weatherOneDayInfo &&
            weatherOneDayInfo.map((i, index) => (
              <div className={styles.day} key={index}>
                <WeatherDay
                  oneDay={true}
                  imperial={i.imperial}
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
