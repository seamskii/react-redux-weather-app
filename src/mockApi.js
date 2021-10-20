
const fetchApi = () => {
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

const fetchCity = () => {
  const cityData = Promise.resolve([
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
  return cityData;
};

export { fetchApi, fetchCity };
