import { useEffect, useState } from "react";
import { WeatherDay } from "../WeatherDay/WeatherDay";
import styles from "./favorites.module.css";
import {fetchSingleCity } from "../mockApi";
import { PageHeader, Button, Descriptions } from "antd";
import { Layout} from "antd";
import {Link } from "react-router-dom";


const { Header, Content, Footer } = Layout;

export const Favorites = () => {
 const favor=()=>{
   console.log("likeS")
 }
  const [weatherOneDayInfo, setWeatherOneDayInfo] = useState([]);

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

    const citysArr = ["moscow", "haifa", "elat"];

if(weatherOneDayInfo.length<citysArr.length)
    for (let i = 0; i <3; i++) {
      const oneDaysData = fetchSingleCity(citysArr[i]);
      oneDaysData.then((res) => {
       console.log(res)

        setWeatherOneDayInfo((weatherOneDayInfo) => [
          ...weatherOneDayInfo,
          {
            min: res.DailyForecasts[0].Temperature.Minimum.Value,
            max: res.DailyForecasts[0].Temperature.Maximum.Value,
            weatherType: res.DailyForecasts[0].Day.IconPhrase,
            weatherKey: padNum(res.DailyForecasts[0].Day.Icon),
            dayOfWeek:
              daysOfWeek[new Date(res.DailyForecasts[0].Date).getDay()],
          },
        ]);
      });
    }
  }, []);

  

  return (
    <div>
      <Layout>
        <div className="site-page-header-ghost-wrapper">
          <PageHeader
            ghost={false}
            title="Hero Weather Task"
            extra={[
              <Button key="2"><Link to="/">Home</Link></Button>,
              <Button key="1" type="primary" onClick={favor}>Favorites`</Button>,
            ]}
          ></PageHeader>
        </div>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div className={styles.searchWraper}></div>

          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
           <div className={styles.main}>
             {!!weatherOneDayInfo && weatherOneDayInfo.map((i,index)=>(
               <div className={styles.day} key={index}>
                        <WeatherDay
                      oneDay={true}
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

