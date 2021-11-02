import { useSelector, useDispatch } from "react-redux";
import { LocationSearch } from "../../LocationSearch/LocationSearch";
import { fetchGeoposition } from "../../Services/api";

export const Geoposition = ({ onCityFound, setError }) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const GeopositionData = fetchGeoposition(latitude, longitude);
      GeopositionData
      .then((res) => {
        if (!res.ok) {
          throw Error("cold not fetch the data for that resource");
        }
        return res.json();
      })
        .then((res) => {
          onCityFound({
            name: res.LocalizedName,
            key: res.Key,
          });
          setError(null);
          dispatch({ type: "GEOPOSITION_OFF" });
        })
        .catch((err) => {
          setError(err.message);
        });
    });
  } else {
    dispatch({ type: "GEOPOSITION_ON" });
    console.log("geoposition is not supported");
  }

  return (
    <div>
      <LocationSearch
        setError={setError}
        counter={counter}
        onCityFound={onCityFound}
      />
    </div>
  );
};
