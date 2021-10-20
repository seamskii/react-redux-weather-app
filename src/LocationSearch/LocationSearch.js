import { useState } from "react";
import { mockApiCity } from "../mockApi";

// import { apiKey } from "../mockApi";

// import { fetchCity } from "../Services/api";



export const LocationSearch=({onCityFound})=>{

     const [zipCode,setZipCode]=useState('');

     const getLocation=(zip)=>{
         console.log(zip);
         const CityData=mockApiCity()
         console.log(CityData[0])
         let res=CityData[0];
         onCityFound({
                 name:res.LocalizedName,
                 key:res.Key,
                 state:res.AdministrativeArea.ID,
             });
        //  const url=`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${zip}`;

        //  fetch(url)
        //  CityData
        //  .then((res)=>res.find(l=>l.Country.ID==='IL'))
        //  .then(res=>{
        //      console.log(res)
        //     onCityFound({
        //      name:res.LocalizedName,
        //      key:res.Key,
        //      state:res.AdministrativeArea.ID,
        //  });
        //  setZipCode('');
        // });

     }

    return(
     <div>
          <input 
          placeholder="City"
          value={zipCode}
          onChange={e=>setZipCode(e.target.value)}
          />
          <button onClick={()=>getLocation(zipCode)}>Search</button>
     </div>
    );
}