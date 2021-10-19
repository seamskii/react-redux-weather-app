import { useState } from "react";
import { apiKey } from "../constants";



export const LocationSearch=({onCityFound})=>{

     const [zipCode,setZipCode]=useState('');

     const getLocation=(zip)=>{
         console.log(zip);
         const url=`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${zip}`;

         fetch(url)
         .then(res=>res.json())
         .then(res=>res.find(l=>l.Country.ID==='IL'))
         .then(res=>{
            onCityFound({
             name:res.LocalizedName,
             key:res.Key,
             state:res.AdministrativeArea.ID,
         });
         setZipCode('');
        });

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