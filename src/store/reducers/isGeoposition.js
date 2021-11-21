const geoReducer = (state = false, action) => {
  switch (action.type) {
    case "GEOPOSITION_ON":
      return (true);
    case "GEOPOSITION_OFF":
      return (false);
    default:
      return state;
  }
};

export default geoReducer;
