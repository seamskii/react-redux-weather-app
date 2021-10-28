export const WeatherDay = ({
  min,
  max,
  weatherType,
  weatherKey,
  dayOfWeek,
  oneDay,
  imperial,
  temperatureType,
  city,
}) => {
  const Celsius="celsius";

    const celFahr=(tempC)=>{
    const Celsius="celsius";

    if(temperatureType===Celsius){
      let res=(tempC - 30)/2;
      return res;
    }else{
      return tempC;
    }
  }

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
          {temperatureType===Celsius ? <div>{celFahr(imperial)}C</div> : <div>{imperial}F</div>}
        </div>
      ) : temperatureType===Celsius ? (
        <div>
          Min: {celFahr(min)}C <br /> Max: {celFahr(max)}C
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
