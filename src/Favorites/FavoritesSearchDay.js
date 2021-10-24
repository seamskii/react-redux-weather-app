import React from 'react'
import { useEffect, useState } from "react";
import { fetchSingleCity } from '../mockApi';





export const FavoritesSearchDay = ({citysArr}) => {
       console.log(citysArr);
 
    const [weatherInfo, setWeatherInfo] = useState([]); 
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
           console.log("weatherOneDayInfo",weatherInfo)
        if (weatherInfo.length < citysArr.length){
            citysArr.map((i, index) => {
              const oneDaysData = fetchSingleCity(i);
              oneDaysData.then((res) => {
                console.log(res);
      
                setWeatherInfo((weatherOneDayInfo) => [
                  ...weatherOneDayInfo,
                  {
                    imperial: res[0].Temperature.Imperial.Value,
                    // max: res.DailyForecasts[0].Temperature.Maximum.Value,
                    weatherType: res[0].WeatherText,
                    weatherKey: padNum(res[0].WeatherIcon),
                    dayOfWeek:
                      daysOfWeek[new Date(res[0].LocalObservationDateTime).getDay()],
                  },
                ]);
              });
            });
          }
      }, []);


    return (
        <div>
            {weatherInfo}
        </div>
    )
}
