import favoritesReducer from "./favorites";
import geoReducer from "./isGeoposition";
import { combineReducers } from "redux";
import tempReducer from "./temperature";

const allReducers = combineReducers({
  favorites: favoritesReducer,
  isGeo: geoReducer,
  temperatureType: tempReducer,
});

export default allReducers;
