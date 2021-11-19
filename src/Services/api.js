export const Key = "aHfmAmdutJvKadZqTyd9IAvI1WHfgvPo";

const fetchWeekData = (currentLocationKey) => {
  const fiveDaysData = fetch(
    `https://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=${currentLocationKey}_PC?apikey=%09${Key}`
  );
  return fiveDaysData;
};
const fetchCity = (citySearch) => {
  const CityData = fetch(
    `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09${Key}&q=${citySearch}`
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
    `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${Key}&q=${latitude}%2C${longitude}`
  );
  return GeopositionData;
};

export { fetchWeekData, fetchCity, fetchSingleCity, fetchGeoposition };
