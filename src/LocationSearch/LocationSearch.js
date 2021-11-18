import { useState } from "react";
import { AutoComplete } from "antd";
import { fetchCity } from "../Services/api";



export const LocationSearch = ({ onCityFound, setError }) => {
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    if (!searchText) {
      setOptions([]);
    } else {
      const CityData = fetchCity(searchText);
      CityData.then((res) => {
        if (!res.ok) {
          throw Error("cold not fetch the data for that resource");
        }
        return res.json();
      })
        .then((res) => {
          res.forEach((i, index) => {
            setOptions((options) => [
              ...options,
              { value: i.LocalizedName, key: i.Key },
            ]);
          });
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  const onSelect = (data) => {
    const found = options.find((obj) => obj.value == data);
    onCityFound({
      name: found.value,
      key: found.key,
    });
  };

  const onChange = (e) => {
    setOptions([]);
  };
  const placeholderConst=()=>{
    return (
      <div style={{color:"#999"}}>
      enter city
      </div>
      )
  }

  return (
    <div>
      <AutoComplete
        allowClear
        options={options}
        style={{
          width: 200,
          color: "black",

        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder={placeholderConst()}
      />
    </div>
  );
};

