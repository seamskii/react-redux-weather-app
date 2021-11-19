export const switChcelsius = (temp) => {
  return {
    type: "CELSIUS",
    payload: temp,
  };
};
export const switchFahrenheit = (temp) => {
  return {
    type: "FAHRENHEIT",
    payload: temp,
  };
};
