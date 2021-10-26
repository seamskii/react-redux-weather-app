export const WeatherDay = ({
  min,
  max,
  weatherType,
  weatherKey,
  dayOfWeek,
  oneDay,
  imperial,
  temperature
}) => {
  console.log("tempe",temperature)
 
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
      ) :temperature? (
        <div>
         Min: {min} C Max: {max} C
        </div>
      ):(
        <div>
         Min: {min} F Max: {max} F
        </div>
      )}

      {/* <div>Min: {min}  Max: {max}</div> */}
      <div>{oneDay ? weatherType : " "}</div>
    </>
  );
};
