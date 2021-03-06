import { useEffect, useState } from "react";
import { WeatherDay } from "../WeatherDay/WeatherDay";
import styles from "./weatherWeek.module.css";
import { LocationSearch } from "../LocationSearch/LocationSearch";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { addCity, removeCity } from "../store/actions";
import { fetchWeekData } from "../Services/api";
import { Geoposition } from "../App/Geoposition/Geoposition";
import "../App/./theme.dark.less";
import "../App/./theme.light.less";

export const WeatherWeek = ({
  setError,
  error,
  theme,
  setCurrentLocationKey,
  currentLocationKey,
  setLocation,
  location,
}) => {
  const [weatherInfo, setWeatherInfo] = useState();
  const [iconPhrase, setIconPhrase] = useState("");

  const favorites = useSelector((state) => state.favorites);
  const isGeo = useSelector((state) => state.isGeo);
  const dispatch = useDispatch();

  const userExists = (key) => {
    return favorites.some(function (el) {
      return el.key === key;
    });
  };

  const isHeartClicked = userExists(currentLocationKey);

  const padNum = (num) => {
    const stringNum = num + "";
    const stringLen = stringNum.length;

    if (stringLen === 1) {
      return "0" + stringNum;
    } else {
      return stringNum;
    }
  };

  const setLike = (currentLocationKey) => {
    if (!favorites.includes(currentLocationKey) && favorites.length < 5) {
      dispatch(addCity({ key: currentLocationKey, location: location }));
    } else {
      alert("You can only add 5 cities");
    }
  };

  const setUnlike = (currentLocationKey) => {
    dispatch(removeCity({ currentLocationKey }));
  };

  const heartToggle = () => {
    return (
      <>
        {isHeartClicked ? (
          <HeartFilled
            className={styles.heartSimbol}
            style={theme === "light" ? { color: "#08c" } : { color: "#d5b50b" }}
            onClick={() => setUnlike(currentLocationKey)}
          />
        ) : (
          <HeartOutlined
            className={styles.heartSimbol}
            style={theme === "light" ? { color: "#08c" } : { color: "#d5b50b" }}
            onClick={() => setLike(currentLocationKey)}
          />
        )}
      </>
    );
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
    if (currentLocationKey) {
      const fiveDaysData = fetchWeekData(currentLocationKey);
      fiveDaysData
        .then((res) => {
          if (!res.ok) {
            throw Error("cold not fetch the data for that resource");
          }
          return res.json();
        })
        .then((res) => {
          setIconPhrase(res.DailyForecasts[0].Day.IconPhrase);
          setError(null);

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
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  }, [currentLocationKey, iconPhrase, location, isGeo]);

  return (
    <div>
      {isGeo ? (
        <div className={styles.searchWraper}>
          <Geoposition
            setError={setError}
            favourites={favorites}
            onCityFound={(cityInfo) => {
              setCurrentLocationKey(cityInfo.key);
              setLocation(cityInfo.name);
            }}
          />
        </div>
      ) : (
        <div className={styles.searchWraper}>
          <LocationSearch
            setError={setError}
            favourites={favorites}
            onCityFound={(cityInfo) => {
              setCurrentLocationKey(cityInfo.key);
              setLocation(cityInfo.name);
            }}
          />
        </div>
      )}

      <div className={styles.likeButton}>
        <div className={styles.likePhraze}>
          <h1 className={styles.fontPhrase}>{location}</h1>
        </div>
        <div className={styles.likeButton}>{heartToggle()}</div>
      </div>

      {error ? (
        <div>{error}</div>
      ) : (
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <div>
            <h2 className={styles.fontPhrase}>{iconPhrase}</h2>
          </div>

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
      )}
    </div>
  );
};

