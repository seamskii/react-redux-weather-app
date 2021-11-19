export const addCity = (city) => {
  return {
    type: "ADDCITY",
    payload: city,
  };
};
export const removeCity = (city) => {
  return {
    type: "REMOVECITY",
    payload: city,
  };
};
