const initialState = {
  listProduct: [],
  weather: "",
  jumbotronImg: "",
  tags: "Mlaku Mlaku",
  search: "",
  season: "",
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "SUCCESS_SEASON":
      return {
        ...state,
        season: action.payload,
      };
    case "FILTER_PRODUCT":
      return {
        ...state,
        listProduct: action.payload,
      };
    case "SUCCESS_GET_PRODUCT":
      return {
        ...state,
        listProduct: [...state.listProduct, ...action.payload],
      };

    case "RESET_LIST_PRODUCT":
      return {
        ...state,
        listProduct: [],
      };

    case "SUCCESS_GET_WEATHER":
      return {
        ...state,
        weather: action.payload,
      };

    case "GET_JUMBOTRON_IMG":
      return {
        ...state,
        jumbotronImg: action.payload.largeImageURL,
        tags: action.payload.tags,
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
