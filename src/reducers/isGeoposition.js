const geoReducer = (state = false, action) => {
  switch (action.type) {
    case "GEOPOSITION_ON":
      return (state = true);
    case "GEOPOSITION_OFF":
      return (state = false);
    default:
      return state;
  }
};

export default geoReducer;
