const initialState = [
  {
    key: "215854",
    location: "Tel Aviv",
  },
];

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDCITY":
      return (state = state.concat({
        key: action.payload.key,
        location: action.payload.location,
      }));

    case "REMOVECITY":
      const newfavourites = state.filter(
        (state) => state.key !== action.payload.currentLocationKey
      );

      return (state = newfavourites);
    default:
      return state;
  }
};

export default counterReducer;
