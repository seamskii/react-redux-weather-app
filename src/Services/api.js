export const Key = "GpnxUsR80XXpnMzO5HIp92rg1YMuxaPI";

const fetchWeekData = (currentLocationKey) => {
  const fiveDaysData = fetch(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=${currentLocationKey}_PC?apikey=%09${Key}`
  );
  return fiveDaysData;
};
const fetchCity = (citySearch) => {
  const CityData = fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09${Key}&q=${citySearch}`
  );
  return CityData;
};
const fetchSingleCity = (city) => {
  const oneCity = fetch(
    `https://dataservice.accuweather.com/currentconditions/v1/locationKey=${city}_PC?apikey=%09${Key}`
  );
  return oneCity;
};
const fetchGeoposition = (latitude, longitude) => {
  const GeopositionData = fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${Key}&q=${latitude}%2C${longitude}`
  );
  return GeopositionData;
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const fetchWeekData = (currentLocationKey) => {
//   const TelAviv = Promise.resolve({
//     Headline: {
//       EffectiveDate: "2021-11-04T07:00:00-06:00",
//       EffectiveEpochDate: 1636030800,
//       Severity: 5,
//       Text: "Thunderstorms Thursday",
//       Category: "thunderstorm",
//       EndDate: "2021-11-04T19:00:00-06:00",
//       EndEpochDate: 1636074000,
//       MobileLink:
//         "http://www.accuweather.com/en/mx/lomas-del-paseo/64925/daily-weather-forecast/215854_pc?lang=en-us",
//       Link: "http://www.accuweather.com/en/mx/lomas-del-paseo/64925/daily-weather-forecast/215854_pc?lang=en-us",
//     },
//     DailyForecasts: [
//       {
//         Date: "2021-10-31T07:00:00-06:00",
//         EpochDate: 1635685200,
//         Temperature: {
//           Minimum: {
//             Value: 62,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 83,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 1,
//           IconPhrase: "Sunny",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 33,
//           IconPhrase: "Clear",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/mx/lomas-del-paseo/64925/daily-weather-forecast/215854_pc?day=1&lang=en-us",
//         Link: "http://www.accuweather.com/en/mx/lomas-del-paseo/64925/daily-weather-forecast/215854_pc?day=1&lang=en-us",
//       },
//       {
//         Date: "2021-11-01T07:00:00-06:00",
//         EpochDate: 1635771600,
//         Temperature: {
//           Minimum: {
//             Value: 62,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 82,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 3,
//           IconPhrase: "Partly sunny",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 33,
//           IconPhrase: "Clear",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/mx/lomas-del-paseo/64925/daily-weather-forecast/215854_pc?day=2&lang=en-us",
//         Link: "http://www.accuweather.com/en/mx/lomas-del-paseo/64925/daily-weather-forecast/215854_pc?day=2&lang=en-us",
//       },
//       {
//         Date: "2021-11-02T07:00:00-06:00",
//         EpochDate: 1635858000,
//         Temperature: {
//           Minimum: {
//             Value: 61,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 82,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 3,
//           IconPhrase: "Partly sunny",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 34,
//           IconPhrase: "Mostly clear",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/mx/lomas-del-paseo/64925/daily-weather-forecast/215854_pc?day=3&lang=en-us",
//         Link: "http://www.accuweather.com/en/mx/lomas-del-paseo/64925/daily-weather-forecast/215854_pc?day=3&lang=en-us",
//       },
//       {
//         Date: "2021-11-03T07:00:00-06:00",
//         EpochDate: 1635944400,
//         Temperature: {
//           Minimum: {
//             Value: 62,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 82,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 3,
//           IconPhrase: "Partly sunny",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 33,
//           IconPhrase: "Clear",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/mx/lomas-del-paseo/64925/daily-weather-forecast/215854_pc?day=4&lang=en-us",
//         Link: "http://www.accuweather.com/en/mx/lomas-del-paseo/64925/daily-weather-forecast/215854_pc?day=4&lang=en-us",
//       },
//       {
//         Date: "2021-11-04T07:00:00-06:00",
//         EpochDate: 1636030800,
//         Temperature: {
//           Minimum: {
//             Value: 57,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 68,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 16,
//           IconPhrase: "Mostly cloudy w/ t-storms",
//           HasPrecipitation: true,
//           PrecipitationType: "Rain",
//           PrecipitationIntensity: "Moderate",
//         },
//         Night: {
//           Icon: 12,
//           IconPhrase: "Showers",
//           HasPrecipitation: true,
//           PrecipitationType: "Rain",
//           PrecipitationIntensity: "Light",
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/mx/lomas-del-paseo/64925/daily-weather-forecast/215854_pc?day=5&lang=en-us",
//         Link: "http://www.accuweather.com/en/mx/lomas-del-paseo/64925/daily-weather-forecast/215854_pc?day=5&lang=en-us",
//       },
//     ],
//   });

//   const Haifa = Promise.resolve({
//     Headline: {
//       EffectiveDate: "2021-11-04T07:00:00-06:00",
//       EffectiveEpochDate: 1636030800,
//       Severity: 5,
//       Text: "Thunderstorms Thursday",
//       Category: "thunderstorm",
//       EndDate: "2021-11-04T19:00:00-06:00",
//       EndEpochDate: 1636074000,
//       MobileLink:
//         "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?lang=en-us",
//       Link: "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?lang=en-us",
//     },
//     DailyForecasts: [
//       {
//         Date: "2021-10-31T07:00:00-06:00",
//         EpochDate: 1635685200,
//         Temperature: {
//           Minimum: {
//             Value: 62,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 86,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 1,
//           IconPhrase: "Sunny",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 34,
//           IconPhrase: "Mostly clear",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=1&lang=en-us",
//         Link: "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=1&lang=en-us",
//       },
//       {
//         Date: "2021-11-01T07:00:00-06:00",
//         EpochDate: 1635771600,
//         Temperature: {
//           Minimum: {
//             Value: 61,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 84,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 3,
//           IconPhrase: "Partly sunny",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 34,
//           IconPhrase: "Mostly clear",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=2&lang=en-us",
//         Link: "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=2&lang=en-us",
//       },
//       {
//         Date: "2021-11-02T07:00:00-06:00",
//         EpochDate: 1635858000,
//         Temperature: {
//           Minimum: {
//             Value: 61,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 84,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 3,
//           IconPhrase: "Partly sunny",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 34,
//           IconPhrase: "Mostly clear",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=3&lang=en-us",
//         Link: "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=3&lang=en-us",
//       },
//       {
//         Date: "2021-11-03T07:00:00-06:00",
//         EpochDate: 1635944400,
//         Temperature: {
//           Minimum: {
//             Value: 61,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 84,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 3,
//           IconPhrase: "Partly sunny",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 34,
//           IconPhrase: "Mostly clear",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=4&lang=en-us",
//         Link: "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=4&lang=en-us",
//       },
//       {
//         Date: "2021-11-04T07:00:00-06:00",
//         EpochDate: 1636030800,
//         Temperature: {
//           Minimum: {
//             Value: 54,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 71,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 16,
//           IconPhrase: "Mostly cloudy w/ t-storms",
//           HasPrecipitation: true,
//           PrecipitationType: "Rain",
//           PrecipitationIntensity: "Moderate",
//         },
//         Night: {
//           Icon: 8,
//           IconPhrase: "Dreary",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=5&lang=en-us",
//         Link: "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/daily-weather-forecast/213181_pc?day=5&lang=en-us",
//       },
//     ],
//   });
//   const Moscow = Promise.resolve({
//     Headline: {
//       EffectiveDate: "2021-11-01T13:00:00+01:00",
//       EffectiveEpochDate: 1635768000,
//       Severity: 3,
//       Text: "Expect rainy weather Monday afternoon through late Monday night",
//       Category: "rain",
//       EndDate: "2021-11-02T07:00:00+01:00",
//       EndEpochDate: 1635832800,
//       MobileLink:
//         "http://www.accuweather.com/en/at/hagberg/3240/daily-weather-forecast/294021_pc?lang=en-us",
//       Link: "http://www.accuweather.com/en/at/hagberg/3240/daily-weather-forecast/294021_pc?lang=en-us",
//     },
//     DailyForecasts: [
//       {
//         Date: "2021-10-31T07:00:00+01:00",
//         EpochDate: 1635660000,
//         Temperature: {
//           Minimum: {
//             Value: 39,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 57,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 4,
//           IconPhrase: "Intermittent clouds",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 36,
//           IconPhrase: "Intermittent clouds",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/at/hagberg/3240/daily-weather-forecast/294021_pc?lang=en-us",
//         Link: "http://www.accuweather.com/en/at/hagberg/3240/daily-weather-forecast/294021_pc?lang=en-us",
//       },
//       {
//         Date: "2021-11-01T07:00:00+01:00",
//         EpochDate: 1635746400,
//         Temperature: {
//           Minimum: {
//             Value: 40,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 54,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 12,
//           IconPhrase: "Showers",
//           HasPrecipitation: true,
//           PrecipitationType: "Rain",
//           PrecipitationIntensity: "Light",
//         },
//         Night: {
//           Icon: 18,
//           IconPhrase: "Rain",
//           HasPrecipitation: true,
//           PrecipitationType: "Rain",
//           PrecipitationIntensity: "Light",
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/at/hagberg/3240/daily-weather-forecast/294021_pc?day=1&lang=en-us",
//         Link: "http://www.accuweather.com/en/at/hagberg/3240/daily-weather-forecast/294021_pc?day=1&lang=en-us",
//       },
//       {
//         Date: "2021-11-02T07:00:00+01:00",
//         EpochDate: 1635832800,
//         Temperature: {
//           Minimum: {
//             Value: 34,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 47,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 6,
//           IconPhrase: "Mostly cloudy",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 38,
//           IconPhrase: "Mostly cloudy",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/at/hagberg/3240/daily-weather-forecast/294021_pc?day=2&lang=en-us",
//         Link: "http://www.accuweather.com/en/at/hagberg/3240/daily-weather-forecast/294021_pc?day=2&lang=en-us",
//       },
//       {
//         Date: "2021-11-03T07:00:00+01:00",
//         EpochDate: 1635919200,
//         Temperature: {
//           Minimum: {
//             Value: 42,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 48,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 6,
//           IconPhrase: "Mostly cloudy",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 12,
//           IconPhrase: "Showers",
//           HasPrecipitation: true,
//           PrecipitationType: "Rain",
//           PrecipitationIntensity: "Light",
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/at/hagberg/3240/daily-weather-forecast/294021_pc?day=3&lang=en-us",
//         Link: "http://www.accuweather.com/en/at/hagberg/3240/daily-weather-forecast/294021_pc?day=3&lang=en-us",
//       },
//       {
//         Date: "2021-11-04T07:00:00+01:00",
//         EpochDate: 1636005600,
//         Temperature: {
//           Minimum: {
//             Value: 38,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 49,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 18,
//           IconPhrase: "Rain",
//           HasPrecipitation: true,
//           PrecipitationType: "Rain",
//           PrecipitationIntensity: "Light",
//         },
//         Night: {
//           Icon: 8,
//           IconPhrase: "Dreary",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/at/hagberg/3240/daily-weather-forecast/294021_pc?day=4&lang=en-us",
//         Link: "http://www.accuweather.com/en/at/hagberg/3240/daily-weather-forecast/294021_pc?day=4&lang=en-us",
//       },
//     ],
//   });
//   const Elat = Promise.resolve({
//     Headline: {
//       EffectiveDate: "2021-11-04T07:00:00-06:00",
//       EffectiveEpochDate: 1636030800,
//       Severity: 4,
//       Text: "Noticeably cooler Thursday",
//       Category: "cooler",
//       EndDate: "2021-11-04T19:00:00-06:00",
//       EndEpochDate: 1636074000,
//       MobileLink:
//         "http://www.accuweather.com/en/mx/reforma/64550/daily-weather-forecast/215615_pc?lang=en-us",
//       Link: "http://www.accuweather.com/en/mx/reforma/64550/daily-weather-forecast/215615_pc?lang=en-us",
//     },
//     DailyForecasts: [
//       {
//         Date: "2021-10-31T07:00:00-06:00",
//         EpochDate: 1635685200,
//         Temperature: {
//           Minimum: {
//             Value: 66,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 87,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 2,
//           IconPhrase: "Mostly sunny",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 33,
//           IconPhrase: "Clear",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/mx/reforma/64550/daily-weather-forecast/215615_pc?day=1&lang=en-us",
//         Link: "http://www.accuweather.com/en/mx/reforma/64550/daily-weather-forecast/215615_pc?day=1&lang=en-us",
//       },
//       {
//         Date: "2021-11-01T07:00:00-06:00",
//         EpochDate: 1635771600,
//         Temperature: {
//           Minimum: {
//             Value: 66,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 86,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 2,
//           IconPhrase: "Mostly sunny",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 33,
//           IconPhrase: "Clear",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/mx/reforma/64550/daily-weather-forecast/215615_pc?day=2&lang=en-us",
//         Link: "http://www.accuweather.com/en/mx/reforma/64550/daily-weather-forecast/215615_pc?day=2&lang=en-us",
//       },
//       {
//         Date: "2021-11-02T07:00:00-06:00",
//         EpochDate: 1635858000,
//         Temperature: {
//           Minimum: {
//             Value: 66,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 87,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 3,
//           IconPhrase: "Partly sunny",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 33,
//           IconPhrase: "Clear",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/mx/reforma/64550/daily-weather-forecast/215615_pc?day=3&lang=en-us",
//         Link: "http://www.accuweather.com/en/mx/reforma/64550/daily-weather-forecast/215615_pc?day=3&lang=en-us",
//       },
//       {
//         Date: "2021-11-03T07:00:00-06:00",
//         EpochDate: 1635944400,
//         Temperature: {
//           Minimum: {
//             Value: 63,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 86,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 3,
//           IconPhrase: "Partly sunny",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 33,
//           IconPhrase: "Clear",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/mx/reforma/64550/daily-weather-forecast/215615_pc?day=4&lang=en-us",
//         Link: "http://www.accuweather.com/en/mx/reforma/64550/daily-weather-forecast/215615_pc?day=4&lang=en-us",
//       },
//       {
//         Date: "2021-11-04T07:00:00-06:00",
//         EpochDate: 1636030800,
//         Temperature: {
//           Minimum: {
//             Value: 55,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 71,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 16,
//           IconPhrase: "Mostly cloudy w/ t-storms",
//           HasPrecipitation: true,
//           PrecipitationType: "Rain",
//           PrecipitationIntensity: "Moderate",
//         },
//         Night: {
//           Icon: 12,
//           IconPhrase: "Showers",
//           HasPrecipitation: true,
//           PrecipitationType: "Rain",
//           PrecipitationIntensity: "Light",
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/mx/reforma/64550/daily-weather-forecast/215615_pc?day=5&lang=en-us",
//         Link: "http://www.accuweather.com/en/mx/reforma/64550/daily-weather-forecast/215615_pc?day=5&lang=en-us",
//       },
//     ],
//   });
//   const London = Promise.resolve({
//     Headline: {
//       EffectiveDate: "2021-11-03T01:00:00+01:00",
//       EffectiveEpochDate: 1635897600,
//       Severity: 2,
//       Text: "Icy conditions late Tuesday night",
//       Category: "ice",
//       EndDate: "2021-11-03T07:00:00+01:00",
//       EndEpochDate: 1635919200,
//       MobileLink:
//         "http://www.accuweather.com/en/at/kolbenthal/9920/daily-weather-forecast/328328_pc?lang=en-us",
//       Link: "http://www.accuweather.com/en/at/kolbenthal/9920/daily-weather-forecast/328328_pc?lang=en-us",
//     },
//     DailyForecasts: [
//       {
//         Date: "2021-10-31T07:00:00+01:00",
//         EpochDate: 1635660000,
//         Temperature: {
//           Minimum: {
//             Value: 29,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 50,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 4,
//           IconPhrase: "Intermittent clouds",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 38,
//           IconPhrase: "Mostly cloudy",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/at/kolbenthal/9920/daily-weather-forecast/328328_pc?lang=en-us",
//         Link: "http://www.accuweather.com/en/at/kolbenthal/9920/daily-weather-forecast/328328_pc?lang=en-us",
//       },
//       {
//         Date: "2021-11-01T07:00:00+01:00",
//         EpochDate: 1635746400,
//         Temperature: {
//           Minimum: {
//             Value: 32,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 46,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 18,
//           IconPhrase: "Rain",
//           HasPrecipitation: true,
//           PrecipitationType: "Rain",
//           PrecipitationIntensity: "Light",
//         },
//         Night: {
//           Icon: 12,
//           IconPhrase: "Showers",
//           HasPrecipitation: true,
//           PrecipitationType: "Rain",
//           PrecipitationIntensity: "Moderate",
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/at/kolbenthal/9920/daily-weather-forecast/328328_pc?day=1&lang=en-us",
//         Link: "http://www.accuweather.com/en/at/kolbenthal/9920/daily-weather-forecast/328328_pc?day=1&lang=en-us",
//       },
//       {
//         Date: "2021-11-02T07:00:00+01:00",
//         EpochDate: 1635832800,
//         Temperature: {
//           Minimum: {
//             Value: 29,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 43,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 3,
//           IconPhrase: "Partly sunny",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 26,
//           IconPhrase: "Freezing rain",
//           HasPrecipitation: true,
//           PrecipitationType: "Mixed",
//           PrecipitationIntensity: "Light",
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/at/kolbenthal/9920/daily-weather-forecast/328328_pc?day=2&lang=en-us",
//         Link: "http://www.accuweather.com/en/at/kolbenthal/9920/daily-weather-forecast/328328_pc?day=2&lang=en-us",
//       },
//       {
//         Date: "2021-11-03T07:00:00+01:00",
//         EpochDate: 1635919200,
//         Temperature: {
//           Minimum: {
//             Value: 30,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 42,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 15,
//           IconPhrase: "Thunderstorms",
//           HasPrecipitation: true,
//           PrecipitationType: "Rain",
//           PrecipitationIntensity: "Moderate",
//         },
//         Night: {
//           Icon: 19,
//           IconPhrase: "Flurries",
//           HasPrecipitation: true,
//           PrecipitationType: "Snow",
//           PrecipitationIntensity: "Moderate",
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/at/kolbenthal/9920/daily-weather-forecast/328328_pc?day=3&lang=en-us",
//         Link: "http://www.accuweather.com/en/at/kolbenthal/9920/daily-weather-forecast/328328_pc?day=3&lang=en-us",
//       },
//       {
//         Date: "2021-11-04T07:00:00+01:00",
//         EpochDate: 1636005600,
//         Temperature: {
//           Minimum: {
//             Value: 19,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 42,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 12,
//           IconPhrase: "Showers",
//           HasPrecipitation: true,
//           PrecipitationType: "Rain",
//           PrecipitationIntensity: "Light",
//         },
//         Night: {
//           Icon: 19,
//           IconPhrase: "Flurries",
//           HasPrecipitation: true,
//           PrecipitationType: "Snow",
//           PrecipitationIntensity: "Light",
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/at/kolbenthal/9920/daily-weather-forecast/328328_pc?day=4&lang=en-us",
//         Link: "http://www.accuweather.com/en/at/kolbenthal/9920/daily-weather-forecast/328328_pc?day=4&lang=en-us",
//       },
//     ],
//   });
//   const Berlin = Promise.resolve({
//     Headline: {
//       EffectiveDate: "2021-11-01T07:00:00+01:00",
//       EffectiveEpochDate: 1635746400,
//       Severity: 5,
//       Text: "Expect showers Monday morning",
//       Category: "rain",
//       EndDate: "2021-11-01T13:00:00+01:00",
//       EndEpochDate: 1635768000,
//       MobileLink:
//         "http://www.accuweather.com/en/fr/dissay-sous-courcillon/72500/daily-weather-forecast/178087_pc?lang=en-us",
//       Link: "http://www.accuweather.com/en/fr/dissay-sous-courcillon/72500/daily-weather-forecast/178087_pc?lang=en-us",
//     },
//     DailyForecasts: [
//       {
//         Date: "2021-11-01T07:00:00+01:00",
//         EpochDate: 1635746400,
//         Temperature: {
//           Minimum: {
//             Value: 45,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 58,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 12,
//           IconPhrase: "Showers",
//           HasPrecipitation: true,
//           PrecipitationType: "Rain",
//           PrecipitationIntensity: "Moderate",
//         },
//         Night: {
//           Icon: 36,
//           IconPhrase: "Intermittent clouds",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/fr/dissay-sous-courcillon/72500/daily-weather-forecast/178087_pc?day=1&lang=en-us",
//         Link: "http://www.accuweather.com/en/fr/dissay-sous-courcillon/72500/daily-weather-forecast/178087_pc?day=1&lang=en-us",
//       },
//       {
//         Date: "2021-11-02T07:00:00+01:00",
//         EpochDate: 1635832800,
//         Temperature: {
//           Minimum: {
//             Value: 41,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 56,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 12,
//           IconPhrase: "Showers",
//           HasPrecipitation: true,
//           PrecipitationType: "Rain",
//           PrecipitationIntensity: "Light",
//         },
//         Night: {
//           Icon: 35,
//           IconPhrase: "Partly cloudy",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/fr/dissay-sous-courcillon/72500/daily-weather-forecast/178087_pc?day=2&lang=en-us",
//         Link: "http://www.accuweather.com/en/fr/dissay-sous-courcillon/72500/daily-weather-forecast/178087_pc?day=2&lang=en-us",
//       },
//       {
//         Date: "2021-11-03T07:00:00+01:00",
//         EpochDate: 1635919200,
//         Temperature: {
//           Minimum: {
//             Value: 38,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 54,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 4,
//           IconPhrase: "Intermittent clouds",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 38,
//           IconPhrase: "Mostly cloudy",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/fr/dissay-sous-courcillon/72500/daily-weather-forecast/178087_pc?day=3&lang=en-us",
//         Link: "http://www.accuweather.com/en/fr/dissay-sous-courcillon/72500/daily-weather-forecast/178087_pc?day=3&lang=en-us",
//       },
//       {
//         Date: "2021-11-04T07:00:00+01:00",
//         EpochDate: 1636005600,
//         Temperature: {
//           Minimum: {
//             Value: 40,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 54,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 3,
//           IconPhrase: "Partly sunny",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 34,
//           IconPhrase: "Mostly clear",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/fr/dissay-sous-courcillon/72500/daily-weather-forecast/178087_pc?day=4&lang=en-us",
//         Link: "http://www.accuweather.com/en/fr/dissay-sous-courcillon/72500/daily-weather-forecast/178087_pc?day=4&lang=en-us",
//       },
//       {
//         Date: "2021-11-05T07:00:00+01:00",
//         EpochDate: 1636092000,
//         Temperature: {
//           Minimum: {
//             Value: 39,
//             Unit: "F",
//             UnitType: 18,
//           },
//           Maximum: {
//             Value: 55,
//             Unit: "F",
//             UnitType: 18,
//           },
//         },
//         Day: {
//           Icon: 6,
//           IconPhrase: "Mostly cloudy",
//           HasPrecipitation: false,
//         },
//         Night: {
//           Icon: 35,
//           IconPhrase: "Partly cloudy",
//           HasPrecipitation: false,
//         },
//         Sources: ["AccuWeather"],
//         MobileLink:
//           "http://www.accuweather.com/en/fr/dissay-sous-courcillon/72500/daily-weather-forecast/178087_pc?day=5&lang=en-us",
//         Link: "http://www.accuweather.com/en/fr/dissay-sous-courcillon/72500/daily-weather-forecast/178087_pc?day=5&lang=en-us",
//       },
//     ],
//   });
//   switch (currentLocationKey) {
//     case "215854":
//       return TelAviv;
//     case "213181":
//       return Haifa;
//     case "215615":
//       return Elat;
//     case "294021":
//       return Moscow;
//     case "328328":
//       return London;
//     case "178087":
//       return Berlin;
//     default:
//       return TelAviv;
//   }
// };

// const fetchCity = (citySearch) => {
//   const TelAviv = Promise.resolve([
//     {
//       Version: 1,
//       Key: "215854",
//       Type: "City",
//       Rank: 31,
//       LocalizedName: "Tel Aviv",
//       Country: {
//         ID: "IL",
//         LocalizedName: "Israel",
//       },
//       AdministrativeArea: {
//         ID: "TA",
//         LocalizedName: "Tel Aviv",
//       },
//     },
//   ]);
//   const Haifa = Promise.resolve([
//     {
//       Version: 1,
//       Key: "213181",
//       Type: "City",
//       Rank: 31,
//       LocalizedName: "Haifa",
//       Country: {
//         ID: "IL",
//         LocalizedName: "Israel",
//       },
//       AdministrativeArea: {
//         ID: "HA",
//         LocalizedName: "Haifa",
//       },
//     },
//     {
//       Version: 1,
//       Key: "2589281",
//       Type: "City",
//       Rank: 85,
//       LocalizedName: "Haifang Township",
//       Country: {
//         ID: "CN",
//         LocalizedName: "China",
//       },
//       AdministrativeArea: {
//         ID: "SD",
//         LocalizedName: "Shandong",
//       },
//     },
//   ]);
//   const Elat = Promise.resolve([
//     {
//       Version: 1,
//       Key: "215615",
//       Type: "City",
//       Rank: 55,
//       LocalizedName: "Elat",
//       Country: {
//         ID: "IL",
//         LocalizedName: "Israel",
//       },
//       AdministrativeArea: {
//         ID: "D",
//         LocalizedName: "Southern District",
//       },
//     },
//   ]);
//   const Moscow = Promise.resolve([
//     {
//       Version: 1,
//       Key: "294021",
//       Type: "City",
//       Rank: 10,
//       LocalizedName: "Moscow",
//       Country: {
//         ID: "RU",
//         LocalizedName: "Russia",
//       },
//       AdministrativeArea: {
//         ID: "MOW",
//         LocalizedName: "Moscow",
//       },
//     },
//   ]);
//   const London = Promise.resolve([
//     {
//       Version: 1,
//       Key: "328328",
//       Type: "City",
//       Rank: 10,
//       LocalizedName: "London",
//       Country: {
//         ID: "GB",
//         LocalizedName: "United Kingdom",
//       },
//       AdministrativeArea: {
//         ID: "LND",
//         LocalizedName: "London",
//       },
//     },
//   ]);
//   const Berlin = Promise.resolve([
//     {
//       Version: 1,
//       Key: "178087",
//       Type: "City",
//       Rank: 10,
//       LocalizedName: "Berlin",
//       Country: {
//         ID: "DE",
//         LocalizedName: "Germany",
//       },
//       AdministrativeArea: {
//         ID: "BE",
//         LocalizedName: "Berlin",
//       },
//     },
//   ]);

//   switch (citySearch) {
//     case "tel-aviv":
//       return TelAviv;
//     case "haifa":
//       return Haifa;
//     case "elat":
//       return Elat;
//     case "moscow":
//       return Moscow;
//     case "london":
//       return London;
//     case "berlin":
//       return Berlin;
//     default:
//       return TelAviv;
//   }
// };

// const fetchSingleCity = (city) => {
//   const TelAviv = Promise.resolve([
//     {
//       LocalObservationDateTime: "2021-10-31T20:35:00-06:00",
//       EpochTime: 1635734100,
//       WeatherText: "Partly cloudy",
//       WeatherIcon: 35,
//       HasPrecipitation: false,
//       PrecipitationType: null,
//       IsDayTime: false,
//       Temperature: {
//         Metric: {
//           Value: 23.3,
//           Unit: "C",
//           UnitType: 17,
//         },
//         Imperial: {
//           Value: 74,
//           Unit: "F",
//           UnitType: 18,
//         },
//       },
//       MobileLink:
//         "http://www.accuweather.com/en/mx/lomas-del-paseo/64925/current-weather/215854_pc?lang=en-us",
//       Link: "http://www.accuweather.com/en/mx/lomas-del-paseo/64925/current-weather/215854_pc?lang=en-us",
//     },
//   ]);
//   const Haifa = Promise.resolve([
//     {
//       LocalObservationDateTime: "2021-10-31T20:35:00-06:00",
//       EpochTime: 1635734100,
//       WeatherText: "Clear",
//       WeatherIcon: 33,
//       HasPrecipitation: false,
//       PrecipitationType: null,
//       IsDayTime: false,
//       Temperature: {
//         Metric: {
//           Value: 23.9,
//           Unit: "C",
//           UnitType: 17,
//         },
//         Imperial: {
//           Value: 75,
//           Unit: "F",
//           UnitType: 18,
//         },
//       },
//       MobileLink:
//         "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/current-weather/213181_pc?lang=en-us",
//       Link: "http://www.accuweather.com/en/mx/casas-reales-de-apodaca/66604/current-weather/213181_pc?lang=en-us",
//     },
//   ]);
//   const Elat = Promise.resolve([
//     {
//       LocalObservationDateTime: "2021-10-31T20:35:00-06:00",
//       EpochTime: 1635734100,
//       WeatherText: "Mostly cloudy",
//       WeatherIcon: 38,
//       HasPrecipitation: false,
//       PrecipitationType: null,
//       IsDayTime: false,
//       Temperature: {
//         Metric: {
//           Value: 24.2,
//           Unit: "C",
//           UnitType: 17,
//         },
//         Imperial: {
//           Value: 76,
//           Unit: "F",
//           UnitType: 18,
//         },
//       },
//       MobileLink:
//         "http://www.accuweather.com/en/mx/reforma/64550/current-weather/215615_pc?lang=en-us",
//       Link: "http://www.accuweather.com/en/mx/reforma/64550/current-weather/215615_pc?lang=en-us",
//     },
//   ]);
//   const Moscow = Promise.resolve([
//     {
//       LocalObservationDateTime: "2021-11-01T03:42:00+01:00",
//       EpochTime: 1635734520,
//       WeatherText: "Clear",
//       WeatherIcon: 33,
//       HasPrecipitation: false,
//       PrecipitationType: null,
//       IsDayTime: false,
//       Temperature: {
//         Metric: {
//           Value: 3,
//           Unit: "C",
//           UnitType: 17,
//         },
//         Imperial: {
//           Value: 37,
//           Unit: "F",
//           UnitType: 18,
//         },
//       },
//       MobileLink:
//         "http://www.accuweather.com/en/at/hagberg/3240/current-weather/294021_pc?lang=en-us",
//       Link: "http://www.accuweather.com/en/at/hagberg/3240/current-weather/294021_pc?lang=en-us",
//     },
//   ]);
//   const London = Promise.resolve([
//     {
//       LocalObservationDateTime: "2021-11-01T03:42:00+01:00",
//       EpochTime: 1635734520,
//       WeatherText: "Clear",
//       WeatherIcon: 33,
//       HasPrecipitation: false,
//       PrecipitationType: null,
//       IsDayTime: false,
//       Temperature: {
//         Metric: {
//           Value: 1.2,
//           Unit: "C",
//           UnitType: 17,
//         },
//         Imperial: {
//           Value: 34,
//           Unit: "F",
//           UnitType: 18,
//         },
//       },
//       MobileLink:
//         "http://www.accuweather.com/en/at/kolbenthal/9920/current-weather/328328_pc?lang=en-us",
//       Link: "http://www.accuweather.com/en/at/kolbenthal/9920/current-weather/328328_pc?lang=en-us",
//     },
//   ]);
//   const Berlin = Promise.resolve([
//     {
//       LocalObservationDateTime: "2021-11-01T04:17:00+01:00",
//       EpochTime: 1635736620,
//       WeatherText: "Light rain",
//       WeatherIcon: 12,
//       HasPrecipitation: true,
//       PrecipitationType: "Rain",
//       IsDayTime: false,
//       Temperature: {
//         Metric: {
//           Value: 10.4,
//           Unit: "C",
//           UnitType: 17,
//         },
//         Imperial: {
//           Value: 51,
//           Unit: "F",
//           UnitType: 18,
//         },
//       },
//       MobileLink:
//         "http://www.accuweather.com/en/fr/dissay-sous-courcillon/72500/current-weather/178087_pc?lang=en-us",
//       Link: "http://www.accuweather.com/en/fr/dissay-sous-courcillon/72500/current-weather/178087_pc?lang=en-us",
//     },
//   ]);

//   switch (city) {
//     case "215854":
//       return TelAviv;
//     case "213181":
//       return Haifa;
//     case "215615":
//       return Elat;
//     case "294021":
//       return Moscow;
//     case "328328":
//       return London;
//     case "178087":
//       return Berlin;
//     default:
//       return TelAviv;
//   }
// };
// const fetchGeoposition = (latitude, longitude) => {
//   const GeopositionData = Promise.resolve({
//     Version: 1,
//     Key: "215793",
//     Type: "City",
//     Rank: 95,
//     LocalizedName: "Tel-aviv Port",
//     EnglishName: "Tel-aviv Port",
//     PrimaryPostalCode: "",
//     Region: {
//       ID: "MEA",
//       LocalizedName: "Middle East",
//       EnglishName: "Middle East",
//     },
//     Country: {
//       ID: "IL",
//       LocalizedName: "Israel",
//       EnglishName: "Israel",
//     },
//     AdministrativeArea: {
//       ID: "TA",
//       LocalizedName: "Tel Aviv",
//       EnglishName: "Tel Aviv",
//       Level: 1,
//       LocalizedType: "District",
//       EnglishType: "District",
//       CountryID: "IL",
//     },
//     TimeZone: {
//       Code: "IST",
//       Name: "Asia/Jerusalem",
//       GmtOffset: 2,
//       IsDaylightSaving: false,
//       NextOffsetChange: "2022-03-25T00:00:00Z",
//     },
//     GeoPosition: {
//       Latitude: 32.1,
//       Longitude: 34.777,
//       Elevation: {
//         Metric: {
//           Value: 25,
//           Unit: "m",
//           UnitType: 5,
//         },
//         Imperial: {
//           Value: 82,
//           Unit: "ft",
//           UnitType: 0,
//         },
//       },
//     },
//     IsAlias: false,
//     ParentCity: {
//       Key: "215854",
//       LocalizedName: "Tel Aviv",
//       EnglishName: "Tel Aviv",
//     },
//     SupplementalAdminAreas: [],
//     DataSets: [
//       "AirQualityCurrentConditions",
//       "AirQualityForecasts",
//       "Alerts",
//       "ForecastConfidence",
//     ],
//   });
//   return GeopositionData;
// };

export { fetchWeekData, fetchCity, fetchSingleCity, fetchGeoposition };
