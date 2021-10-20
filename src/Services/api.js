import axios from "axios";

const restInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL || "https://dataservice.accuweather.com/",
  });

  const fetchFiveDays = async (location,api) => {
    return restInstance.get(`/forecasts/v1/daily/5daylocationKey=${location}_PC?apikey=%09${api}/`)
    .then((response) => {
      return response.data;
    });
  };
  
  fetchFiveDays.key = "fiveDays";

  const fetchCity = async (api,zip) => {
    return restInstance.get(`/locations/v1/cities/autocomplete?apikey=${api}&q=${zip}`)
    .then((response) => {
      return response.data;
    });
  };

  fetchCity.key = "city";

export{
    fetchFiveDays,
    fetchCity,
}
