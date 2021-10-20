import axios from "axios";

// export const apiKey='cOGitnWGvxGmaZxXMPEjZHQMRlzqZHhP';

const restInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL || "https://dataservice.accuweather.com/",
  });

  const fetchFiveDays = async (location,api) => {
    return restInstance.get(`/forecasts/v1/daily/5day/locationKey=${location}_PC?apikey=%09${api}/`)
    .then((response) => {
      return response.data;
    });
  };
  

  const fetchCity = async (api,zip) => {
    return restInstance.get(`/locations/v1/cities/autocomplete?apikey=${api}&q=${zip}`)
    .then((response) => {
      return response.data;
    });
  };

export {
    fetchFiveDays,
    fetchCity,
}
