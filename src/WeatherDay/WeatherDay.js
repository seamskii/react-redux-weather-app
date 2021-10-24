export const WeatherDay = ({
  min,
  max,
  weatherType,
  weatherKey,
  dayOfWeek,
  oneDay,
  imperial,
}) => {
  return (
    <>
      <div>{oneDay ? "Name" : " "}</div>
      {dayOfWeek}
      <img
        alt={weatherType}
        src={`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`}
      />

      {oneDay ? (
        <div>{imperial}</div>
      ) : (
        <div>
          Min: {min} Max: {max}
        </div>
      )}

      {/* <div>Min: {min}  Max: {max}</div> */}
      <div>{oneDay ? weatherType : " "}</div>
    </>
  );
};
