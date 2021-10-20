import { useState } from "react";
import { fetchCity } from "../mockApi";
// import { fetchCity } from "../Services/api";
import { Input, Space } from 'antd';
import styles from "../App/styles.module.css";
// import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

export const LocationSearch = ({ onCityFound }) => {
  const [zipCode, setZipCode] = useState("");

  const getLocation = (zip) => {
    console.log(zip);
    const CityData = fetchCity();
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
    <div className={styles.search}>
        <Search 
        value={zipCode}
         placeholder="input search City" 
         allowClear onSearch={getLocation}
        onChange={(e) => setZipCode(e.target.value)}
     />
    </div>
  );
};
