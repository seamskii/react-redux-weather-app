import { useSelector } from "react-redux";

export const WeatherDay = ({
  min,
  max,
  weatherType,
  weatherKey,
  dayOfWeek,
  oneDay,
  imperial,
  city,
}) => {
  const temperatureType = useSelector((state) => state.temperatureType);

  const Celsius = "celsius";

  const celFahr = (tempC) => {
    const Celsius = "celsius";

    if (temperatureType === Celsius) {
      let res = (tempC - 30) / 2;
      return res;
    } else {
      return tempC;
    }
  };

  return (
    <>
      <div>{oneDay ? <div>{city}</div> : " "}</div>
      {dayOfWeek}
      <img
        alt={weatherType}
        src={`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`}
      />

      {oneDay ? (
        <div>
          {temperatureType === Celsius ? (
            <div>{celFahr(imperial)}℃</div>
          ) : (
            <div>{imperial}℉</div>
          )}
        </div>
      ) : temperatureType === Celsius ? (
        <div>
          Min: {celFahr(min)}℃ <br /> Max: {celFahr(max)}℃
        </div>
      ) : (
        <div>
          Min: {min}℉
           <br /> Max: {max}℉
        </div>
      )}

      <div>{oneDay ? weatherType : " "}</div>
    </>
  );
};
