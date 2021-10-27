import { useState } from "react";
import { fetchCity } from "../mockApi";
// import { fetchCity } from "../Services/api";
import { Input, Space } from 'antd';
import styles from "./location.modules.css";


const { Search } = Input;

export const LocationSearch = ({ onCityFound,setHeart,favourites }) => {
  const [zipCode, setZipCode] = useState("");
  const getLocation = (zip) => {
    if(favourites.includes(zip)){
      setHeart(true)
    }else{ setHeart(false) }
   
    const CityData = fetchCity(zip);
    CityData.then((res) => res[0]).then((res) => {
      console.log(res);
      onCityFound({
        name: res.LocalizedName,
        key: res.Key,
        state: res.AdministrativeArea.ID,
      });
      setZipCode("");
    });
  };

  return (
    <div>
        <Search 
    style={{ maxWidth: 250 }}
        value={zipCode}
         placeholder="input search City" 
         allowClear onSearch={getLocation}
        onChange={(e) => setZipCode(e.target.value)  
              
        }
     />
    </div>
  );
};
