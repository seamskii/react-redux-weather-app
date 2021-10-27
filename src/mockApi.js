const Key="jDxJ2sRCtvYEJjKU5MLbLl6GqjiXsAvu"

const fetchWeekData = (location) => {
  const data = Promise.resolve({
    Headline: {
      EffectiveDate: "2021-10-22T14:00:00-05:00",
      EffectiveEpochDate: 1634929200,
      Severity: 5,
      Text: "A thunderstorm Friday afternoon",
      Category: "thunderstorm",
      EndDate: "2021-10-22T20:00:00-05:00",
      EndEpochDate: 1634950800,
      MobileLink:
        "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?lang=en-us",
      Link: "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?lang=en-us",
    },
    DailyForecasts: [
      {
        Date: "2021-10-20T07:00:00-05:00",
        EpochDate: 1634731200,
        Temperature: {
          Minimum: {
            Value: 67,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 84,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 2,
          IconPhrase: "Mostly sunny",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 34,
          IconPhrase: "Mostly clear",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=1&lang=en-us",
        Link: "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=1&lang=en-us",
      },
      {
        Date: "2021-10-21T07:00:00-05:00",
        EpochDate: 1634817600,
        Temperature: {
          Minimum: {
            Value: 69,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 84,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 17,
          IconPhrase: "Partly sunny w/ t-storms",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Moderate",
        },
        Night: {
          Icon: 36,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=2&lang=en-us",
        Link: "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=2&lang=en-us",
      },
      {
        Date: "2021-10-22T07:00:00-05:00",
        EpochDate: 1634904000,
        Temperature: {
          Minimum: {
            Value: 67,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 84,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 3,
          IconPhrase: "Partly sunny",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Moderate",
        },
        Night: {
          Icon: 38,
          IconPhrase: "Mostly cloudy",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=3&lang=en-us",
        Link: "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=3&lang=en-us",
      },
      {
        Date: "2021-10-23T07:00:00-05:00",
        EpochDate: 1634990400,
        Temperature: {
          Minimum: {
            Value: 68,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 86,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 3,
          IconPhrase: "Partly sunny",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 38,
          IconPhrase: "Mostly cloudy",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=4&lang=en-us",
        Link: "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=4&lang=en-us",
      },
      {
        Date: "2021-10-24T07:00:00-05:00",
        EpochDate: 1635076800,
        Temperature: {
          Minimum: {
            Value: 67,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 85,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 3,
          IconPhrase: "Partly sunny",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 36,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink:
          "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=5&lang=en-us",
        Link: "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=5&lang=en-us",
      },
    ],
  });
  return data;
};

const fetchCity = (zip) => {

  const Moscow = Promise.resolve([
    {
      Version: 1,
      Key: "294021",
      Type: "City",
      Rank: 10,
      LocalizedName: "Moscow",
      Country: {
        ID: "RU",
        LocalizedName: "Russia",
      },
      AdministrativeArea: {
        ID: "MOW",
        LocalizedName: "Moscow",
      },
    },
    {
      Version: 1,
      Key: "332633",
      Type: "City",
      Rank: 65,
      LocalizedName: "Moscow",
      Country: {
        ID: "US",
        LocalizedName: "United States",
      },
      AdministrativeArea: {
        ID: "ID",
        LocalizedName: "Idaho",
      },
    },
  ]);

  const Haifa = Promise.resolve([
    {
      Version: 1,
      Key: "213181",
      Type: "City",
      Rank: 31,
      LocalizedName: "Haifa",
      Country: {
        ID: "IL",
        LocalizedName: "Israel",
      },
      AdministrativeArea: {
        ID: "HA",
        LocalizedName: "Haifa",
      },
    },
    {
      Version: 1,
      Key: "2589281",
      Type: "City",
      Rank: 85,
      LocalizedName: "Haifang Township",
      Country: {
        ID: "CN",
        LocalizedName: "China",
      },
      AdministrativeArea: {
        ID: "SD",
        LocalizedName: "Shandong",
      },
    },
  ]);
  const Elat = Promise.resolve([
    {
      Version: 1,
      Key: "215615",
      Type: "City",
      Rank: 55,
      LocalizedName: "Elat",
      Country: {
        ID: "IL",
        LocalizedName: "Israel",
      },
      AdministrativeArea: {
        ID: "D",
        LocalizedName: "Southern District",
      },
    },
    {
      Version: 1,
      Key: "2806463",
      Type: "City",
      Rank: 75,
      LocalizedName: "Elathur",
      Country: {
        ID: "IN",
        LocalizedName: "India",
      },
      AdministrativeArea: {
        ID: "TN",
        LocalizedName: "Tamil Nadu",
      },
    },
  ]);
  switch (zip) {
    case "Moscow":
      return Moscow;
    case "Haifa":
      return Haifa;
    case "Elat":
      return Elat;
    default:
      return Haifa;
  }
};
const fetchSingleCity = (zip) => {
  console.log("zip",zip)
  const Elat = Promise.resolve([
    {
      LocalObservationDateTime: "2021-10-24T09:55:00-05:00",
      EpochTime: 1635087300,
      WeatherText: "Mostly cloudy",
      WeatherIcon: 6,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 23,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 73,
          Unit: "F",
          UnitType: 18,
        },
      },
      MobileLink:
        "http://www.accuweather.com/en/mx/reforma/64550/current-weather/215615_pc?lang=en-us",
      Link: "http://www.accuweather.com/en/mx/reforma/64550/current-weather/215615_pc?lang=en-us",
    },
  ]);
  const Moscow = Promise.resolve([
    {
      LocalObservationDateTime: "2021-10-24T16:57:00+02:00",
      EpochTime: 1635087420,
      WeatherText: "Sunny",
      WeatherIcon: 1,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 13.2,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 56,
          Unit: "F",
          UnitType: 18,
        },
      },
      MobileLink:
        "http://www.accuweather.com/en/at/hagberg/3240/current-weather/294021_pc?lang=en-us",
      Link: "http://www.accuweather.com/en/at/hagberg/3240/current-weather/294021_pc?lang=en-us",
    },
  ]);
  const Haifa = Promise.resolve([
    {
      LocalObservationDateTime: "2021-10-24T09:55:00-05:00",
      EpochTime: 1635087300,
      WeatherText: "Drizzle",
      WeatherIcon: 12,
      HasPrecipitation: true,
      PrecipitationType: "Rain",
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 21.1,
          Unit: "C",
          UnitType: 17,
        },
        Imperial: {
          Value: 70,
          Unit: "F",
          UnitType: 18,
        },
      },
      MobileLink:
        "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/current-weather/213181_pc?lang=en-us",
      Link: "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/current-weather/213181_pc?lang=en-us",
    },
  ]);
  switch (zip) {
    case "Moscow":
      return Moscow;
    case "Haifa":
      return Haifa;
    case "Elat":
      return Elat;
    default:
      return Haifa;
  }
};

export { fetchWeekData, fetchCity, fetchSingleCity };
