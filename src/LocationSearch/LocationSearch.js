import { useState } from "react";
import { Input, Space } from "antd";
import { fetchCity, Key } from "../Services/api";
import { useSelector, useDispatch } from "react-redux";

const { Search } = Input;

export const LocationSearch = ({ onCityFound, setError }) => {
  const [citySearch, setCitySearch] = useState("");

  const getLocation = () => {
    const CityData = fetchCity(citySearch);
    CityData.then((res) => {
      if (!res.ok) {
        throw Error("cold not fetch the data for that resource");
      }
      return res.json();
    })
      .then((res) => {
        onCityFound({
          name: res[0].LocalizedName,
          key: res[0].Key,
        });
        setError(null);
        setCitySearch("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <Search
        style={{ maxWidth: 250 }}
        value={citySearch}
        placeholder="input search City"
        allowClear
        onSearch={getLocation}
        onChange={(e) => setCitySearch(e.target.value)}
      />
    </div>
  );
};
