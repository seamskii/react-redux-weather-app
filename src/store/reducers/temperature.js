const initialState = "fahrenheit";

const tempReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CELSIUS":
      return (state = action.payload);

    case "FAHRENHEIT":
      return (state = action.payload);
    default:
      return state;
  }
};

export default tempReducer;
