import counterReducer from "./counter";
import geoReducer from "./isGeoposition";
import { combineReducers } from "redux";
import tempReducer from "./temperature";

const allReducers = combineReducers({
  counter: counterReducer,
  isGeo: geoReducer,
  temperatureType: tempReducer,
});

export default allReducers;
