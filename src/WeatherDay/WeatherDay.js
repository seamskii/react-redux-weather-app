export const WeatherDay = ({
  min,
  max,
  weatherType,
  weatherKey,
  dayOfWeek,
  oneDay,
  imperial,
  temperature,
  city,
}) => {

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
          {temperature ? <div>{imperial}C</div> : <div>{imperial}F</div>}
        </div>
      ) : temperature ? (
        <div>
          Min: {min}C <br /> Max: {max}C
        </div>
      ) : (
        <div>
          Min: {min}F <br /> Max: {max}F
        </div>
      )}

      <div>{oneDay ? weatherType : " "}</div>
    </>
  );
};
