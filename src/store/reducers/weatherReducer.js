const initialState = {
  weather: [],
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case "SUCCESS_GET_WEATHER":
      return {
        ...state,
        weather: action.payload,
      };

    case "CHANGE_INPUT_SEARCH":
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
}
