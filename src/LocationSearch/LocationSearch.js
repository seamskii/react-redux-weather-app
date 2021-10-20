import { useState } from "react";
import { fetchCity } from "../mockApi";
// import { fetchCity } from "../Services/api";
import { Input, Space } from 'antd';
import styles from "./styles.module.css";
// import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1890ff',
//     }}
//   />
// );

// const onSearch = value => console.log(value);


export const LocationSearch = ({ onCityFound }) => {
  const [zipCode, setZipCode] = useState("");

  const getLocation = (zip) => {
    console.log(zip);
    const CityData = fetchCity();
    //  const url=`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${zip}`;

    //  fetch(url)
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
    <div className={styles.Search}>
        <Search 
        value={zipCode}
         placeholder="input search City" 
         allowClear onSearch={getLocation}
        onChange={(e) => setZipCode(e.target.value)}
     />
    </div>
  );
};
