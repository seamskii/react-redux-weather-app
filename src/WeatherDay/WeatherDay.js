export const WeatherDay=({min,max,weatherType,weatherKey,dayOfWeek})=>{
return(
    <>
       {dayOfWeek}
        <img 
        alt={weatherType}
        src={`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`}
        />
    
    <div> Min: {min}  Max: {max}</div>
    </>
);
};