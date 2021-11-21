const initialState = "fahrenheit";

const tempReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CELSIUS":
      return (action.payload);

    case "FAHRENHEIT":
      return (action.payload);
    default:
      return state;
  }
};

export default tempReducer;
