import { useEffect, useState } from "react";
import { WeatherDay } from "../WeatherDay/WeatherDay";
import styles from "./styles.module.css";
import { LocationSearch } from "../LocationSearch/LocationSearch";
import { fetchFiveDays } from "../Services/api";
import { fetchApi } from "../mockApi";
import { PageHeader, Button, Descriptions } from "antd";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

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
      <Layout>
        <div className="site-page-header-ghost-wrapper">
          <PageHeader
            ghost={false}
            title="Hero Weather Task"
            extra={[
              <Button key="2">Home</Button>,
              <Button key="1" type="primary">
                Favorites`
              </Button>,
            ]}
          ></PageHeader>
        </div>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        ><div className={styles.searchWraper}> 
          <LocationSearch
        onCityFound={(cityInfo) => {
          setLocationKey(cityInfo.key);
          setLocation(cityInfo.name);
        }}
      /></div>
          <h1>{location}</h1>
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
        </Content>
        <Footer style={{ textAlign: "center" }}>
          БЛАГОДАРЮ ТЕБЯ, ВЛАДЫКА ЭДУАРД!
        </Footer>
      </Layout>
    </div>
  );
};
