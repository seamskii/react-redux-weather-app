import { useEffect, useState } from "react";
import { WeatherDay } from "../WeatherDay/WeatherDay";
import styles from "./styles.module.css";
import { LocationSearch } from "../LocationSearch/LocationSearch";
import { fetchFiveDays } from "../Services/api";
import { fetchApi } from "../mockApi";
import { PageHeader, Button, Descriptions } from 'antd';





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
       <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Title"
      subTitle="This is a subtitle"
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>,
      ]}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
        <Descriptions.Item label="Association">
          <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
        <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
        <Descriptions.Item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    </PageHeader>
  </div>,
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
