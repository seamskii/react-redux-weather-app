const initialState = [];

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDCITY":
      return (state.concat({
        key: action.payload.key,
        location: action.payload.location,
      }));

    case "REMOVECITY":
      const newfavourites = state.filter(
        (state) => state.key !== action.payload.currentLocationKey
      );

      return (newfavourites);
    default:
      return state;
  }
};

export default favoritesReducer;
