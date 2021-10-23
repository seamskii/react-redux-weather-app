export const WeatherDay=({min,max,weatherType,weatherKey,dayOfWeek,oneDay})=>{
return(
    
    <>
    <div>{oneDay?"Name":' '}</div>
       {dayOfWeek}
        <img 
        alt={weatherType}
        src={`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`}
        />
    
    <div> Min: {min}  Max: {max}</div>
    <div>{oneDay?weatherType:' '}</div>
 
    </>
);
};