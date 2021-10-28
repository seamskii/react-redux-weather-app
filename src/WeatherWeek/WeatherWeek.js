import { useEffect, useState } from "react";
import { WeatherDay } from "../WeatherDay/WeatherDay";
import styles from "./weatherWeek.module.css";
import { LocationSearch } from "../LocationSearch/LocationSearch";
import { fetchWeekData } from "../mockApi";
import { Layout, PageHeader, Button } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";
import { Favorites } from "../Favorites/Favorites";




const { Header, Content, Footer } = Layout;

export const WeatherWeek = ({ setFavourites, favourites, temperatureType }) => {
  const [currentLocationKey, setCurrentLocationKey] = useState("Haifa");
  const [weatherInfo, setWeatherInfo] = useState();
  const [location, setLocation] = useState("Haifa");
  const [iconPhrase, setIconPhrase] = useState("");



  const CelFahr = (tempC) => {

    const Celsius = "celsius";

    if (temperatureType === Celsius) {
      let res = (tempC - 30) / 2;
      return res;
    } else {
      return tempC;
    }
  };

  const padNum = (num) => {
    const stringNum = num + "";
    const stringLen = stringNum.length;

    if (stringLen === 1) {
      return "0" + stringNum;
    } else {
      return stringNum;
    }
  };


  const setLike = (location,isHeartClicked) => {
    if (!favourites.includes(location)) {
      setFavourites((favourites) => [...favourites, location]);
      return isHeartClicked=true;
    }
  };

  const FilterArr = (location,isHeartClicked) => {
    const newfavourites = favourites.filter(
      (favourites) => favourites !== location
    );
    setFavourites(newfavourites);
    return isHeartClicked=false;
  };

  const heartToggle = (location) => {
    const isHeartClicked = favourites.includes(location);
    return (
      <>
        {isHeartClicked ? (
          <HeartOutlined style={{ fontSize: 33, marginRight: 10 }} />
        ) : (
          " "
        )}

        {isHeartClicked ? (
          <Button type="primary" onClick={() => FilterArr(location,isHeartClicked)}>
            Remove from Favorites
          </Button>
        ) : (
          <Button type="primary" onClick={() => setLike(location,isHeartClicked)}>
            Add to Favorites
          </Button>
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
      const fiveDaysData = fetchWeekData(location);
      fiveDaysData
        .then((res) => {
          console.log(res);
          setIconPhrase(res.DailyForecasts[0].Day.IconPhrase);

          window.wetherArr= res.DailyForecasts.map((df) => {
            return {
              min: CelFahr(df.Temperature.Minimum.Value),
              max: CelFahr(df.Temperature.Maximum.Value),
              weatherType: df.Day.IconPhrase,
              weatherKey: padNum(df.Day.Icon),
              dayOfWeek: daysOfWeek[new Date(df.Date).getDay()],
            };
          })
          
          setWeatherInfo(
            res.DailyForecasts.map((df) => {
              return {
                min: CelFahr(df.Temperature.Minimum.Value),
                max: CelFahr(df.Temperature.Maximum.Value),
                weatherType: df.Day.IconPhrase,
                weatherKey: padNum(df.Day.Icon),
                dayOfWeek: daysOfWeek[new Date(df.Date).getDay()],
              };
            })
          );

   
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [currentLocationKey, iconPhrase, temperatureType, location]);


  console.log("weatherInfo:",weatherInfo)
  console.log("window.wetherArr:",window.wetherArr)
  

  return (
    <div>
      <div className={styles.searchWraper}>
        <LocationSearch
          favourites={favourites}
          onCityFound={(cityInfo) => {
            setCurrentLocationKey(cityInfo.key);
            setLocation(cityInfo.name);
          }}
        />
      </div>
      <div className={styles.likeButton}>
        <h1>{location}</h1>
        <div className={styles.likeButton}>{heartToggle(location)}</div>
      </div>

      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 380 }}
      >
        <h2>{iconPhrase}</h2>
        <div className={styles.main}>
          {!!window.wetherArr &&
            window.wetherArr.map((i, index) => (
              <div className={styles.day} key={index}>
                <WeatherDay
                  temperatureType={temperatureType}
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
// import { useEffect, useState } from "react";
// import { WeatherDay } from "../WeatherDay/WeatherDay";
// import styles from "./weatherWeek.module.css";
// import { LocationSearch } from "../LocationSearch/LocationSearch";
// import { fetchWeekData } from "../mockApi";
// import { Layout, PageHeader, Button } from "antd";
// import { Link } from "react-router-dom";
// import { HeartOutlined } from "@ant-design/icons";
// import { Favorites } from "../Favorites/Favorites";

// const { Header, Content, Footer } = Layout;

// export const WeatherWeek = ({setFavourites,favourites,temperatureType}) => {
//   const [currentLocationKey, setCurrentLocationKey] = useState("Haifa");
//   const [weatherInfo, setWeatherInfo] = useState();
//   const [location, setLocation] = useState("Haifa");
//   const [iconPhrase, setIconPhrase] = useState("");
//   const [heart, setHeart] = useState(false);

//   const setLike=(location)=>{
//     if(!favourites.includes(location)){
//       setFavourites(favourites=>[...favourites,location]);
//       setHeart(true)
//     }
//   }
//   const CelFahr=(tempC)=>{
//   const Celsius="celsius";

//     if(temperatureType===Celsius){
//       let res=(tempC - 30)/2;
//       return res;
//     }else{
//       return tempC;
//     }
//   }
//   const FilterArr=(location)=>{
//     const newfavourites = favourites.filter(favourites => favourites != location);
//     setFavourites(newfavourites)
//     setHeart(false)
//   }

//   const padNum = (num) => {
//     const stringNum = num + "";
//     const stringLen = stringNum.length;

//     if (stringLen === 1) {
//       return "0" + stringNum;
//     } else {
//       return stringNum;
//     }
//   };

//   useEffect(() => {
//     const daysOfWeek = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];
//     if (currentLocationKey) {
//       const fiveDaysData = fetchWeekData(location);
//       fiveDaysData.then((res) => {
//         console.log(res);
//         setIconPhrase(res.DailyForecasts[0].Day.IconPhrase);
//         setWeatherInfo(
//           res.DailyForecasts.map((df) => {
//             return {
//               min: CelFahr(df.Temperature.Minimum.Value),
//               max:CelFahr(df.Temperature.Maximum.Value),
//               weatherType: df.Day.IconPhrase,
//               weatherKey: padNum(df.Day.Icon),
//               dayOfWeek: daysOfWeek[new Date(df.Date).getDay()],
//             };
//           })
//         );
//       }).catch(err=>{
//         console.log(err.message);
//       })
//     }
//   }, [currentLocationKey, iconPhrase,temperatureType,location,heart]);

//   return (
//     <div>
//       <div className={styles.searchWraper}>
//         <LocationSearch
//         favourites={favourites}
//         setHeart={setHeart}
//           onCityFound={(cityInfo) => {
//             setCurrentLocationKey(cityInfo.key);
//             setLocation(cityInfo.name);

//           }}
//         />
//       </div>
//       <div className={styles.likeButton}>
//         <h1>{location}</h1>
//         <div className={styles.likeButton}>
//           {heart?<HeartOutlined style={{ fontSize: 33, marginRight: 10 }} />:" "}

//           {heart?<Button type="primary" onClick={()=>FilterArr(location)}>Remove from Favorites</Button>:
//           <Button type="primary" onClick={()=>setLike(location)}>Add to Favorites</Button>
//           }
//         </div>
//       </div>

//       <div
//         className="site-layout-background"
//         style={{ padding: 24, minHeight: 380 }}
//       >
//         <h2>{iconPhrase}</h2>
//         <div className={styles.main}>
//           {!!weatherInfo &&
//             weatherInfo.map((i, index) => (
//               <div className={styles.day} key={index}>
//                 <WeatherDay
//                  temperatureType={temperatureType}
//                   min={i.min}
//                   max={i.max}
//                   weatherType={i.weatherType}
//                   weatherKey={i.weatherKey}
//                   dayOfWeek={i.dayOfWeek}
//                 />
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };
