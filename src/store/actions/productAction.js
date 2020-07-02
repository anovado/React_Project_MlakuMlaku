import axios from "axios";

const url = process.env.REACT_APP_PIXABAY
const urlWeather = process.env.REACT_APP_WEATHER

let baseUrl;
let baseUrlWeather;
export const doSearch = (city) => {
  if (city) {
    baseUrl = url + "&q=" + city;
    baseUrlWeather = urlWeather + "&q=" + city;
  } else {
    baseUrl =process.env.REACT_APP_PIXABAY_DEFAULT
    baseUrlWeather = process.env.REACT_APP_WEATHER_DEFAULT
  }
  return async (dispatch) => {
    getJumbotronImage(dispatch, baseUrl);
    getWeather(dispatch, baseUrlWeather);
  };
};

const getJumbotronImage = async (dispatch, baseUrl) => {
  const response = await axios.get(baseUrl);
  if (response.data.hits[0] !== undefined) {
    dispatch({
      type: "GET_JUMBOTRON_IMG",
      payload: response.data.hits[0],
    });
  }
};

const getWeather = async (dispatch, baseUrlWeather) => {
  const response = await axios.get(baseUrlWeather);
  if (response.data.list[0] !== undefined) {
    dispatch({
      type: "SUCCESS_GET_WEATHER",
      payload: response.data.list[0].main.temp - 273,
    });
    // console.log("ini cek masuk", response.data.list[0].main.temp - 273);
    getSeason(dispatch, response.data.list[0].main.temp - 273);
  }
};

export const changeInputSearch = (e) => {
  return async (dispatch) => {
    dispatch({
      type: "CHANGE_INPUT_SEARCH",
      payload: e.target.value,
    });
    dispatch(doSearch(e.target.value));
  };
};

const getSeason = async (dispatch, temp) => {
  //   console.log("ini cek masuk", temp);
  //   return async (dispatch) => {
  //   if (temp) {
  // dispatch({
  //   type: "SUCCESS_SEASON",
  //   payload: "shirt",
  // });
  //       dispatch
  //     getListProduct();
  //   }
  //   if (temp) {
  dispatch({ type: "RESET_LIST_PRODUCT" });
  if (temp < 10) {
    // dispatch({ type : "RESET_LIST_PRODUCT"})
    getListProduct(dispatch, "shirt winter");
    getListProduct(dispatch, "pants winter");
    getListProduct(dispatch, "jacket winter");
    getListProduct(dispatch, "shoes winter");
    getListProduct(dispatch, "hat winter");
  } else if (temp >= 10 && temp < 30) {
    //   dispatch({ type : "RESET_LIST_PRODUCT"})
    getListProduct(dispatch, "shirt fall");
    getListProduct(dispatch, "pants fall");
    getListProduct(dispatch, "jacket fall");
    getListProduct(dispatch, "shoes fall");
    getListProduct(dispatch, "hat fall");
  } else {
    getListProduct(dispatch, "shirt summer");
    getListProduct(dispatch, "pants summer");
    getListProduct(dispatch, "jacket summer");
    getListProduct(dispatch, "shoes summer");
    getListProduct(dispatch, "hat summer");
  }
};
// };

export const getListProduct = (dispatch, keyword) => {
  //   keyword ? (keyword = "london") : (keyword = keyword);
  //   alert("ini amazon");
  axios({
    method: "GET",
    url: process.env.REACT_APP_AMAZON_URL,
    headers: {
      "content-type": process.env.REACT_APP_AMAZON_CONTENT_TYPE,
      "x-rapidapi-host": process.env.REACT_APP_AMAZON_HOST,
      "x-rapidapi-key": process.env.REACT_APP_AMAZON_KEY,
    },
    params: {
      keywords: keyword,
      marketplace: "US",
    },
  })
    .then((response) => {
      console.log(response);

      dispatch({
        type: "SUCCESS_GET_PRODUCT",
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  //   return async (dispatch) => {
  //     try {
  //       const response = await axios({
  //         method: "GET",
  //         url: "https://amazon-price1.p.rapidapi.com/search",
  //         headers: {
  //           "content-type": "application/octet-stream",
  //           "x-rapidapi-host": "amazon-price1.p.rapidapi.com",
  //           "x-rapidapi-key":
  //             "8567d0e4d1msha36250d66c3afa2p1edacejsn2b549c9615dc",
  //         },
  //         params: {
  //           keywords: "pants",
  //           marketplace: "US",
  //         },
  //       });
  //       dispatch({ type: "SUCCESS_GET_PRODUCT", payload: response.data });
  //     } catch (error) {
  // console.log("ini keyword", keyword);

  //   console.warn("data amazone", response.data)

  // .then((response) => {
  //   console.warn("response amazon", response);
  //   dispatch({ type: "SUCCESS_GET_PRODUCT", payload: response.data });
  // })
  //       console.log(error);
  //     }
  //   };
};
// };
export const filteringProductCategory = (
  data,
  filter,
  minPrice,
  maxPrice,
  rate
) => {
  return async (dispatch) => {
    const filterProductCategory = () => {
      if (filter) {
        const filterCategory = data.filter((item) => {
          if (
            item.title
              .toLowerCase()
              .split(/\s+|\.|-/)
              .includes(...filter)
          ) {
            return item;
          } else {
            return false;
          }
        });
        return filterCategory;
      } else {
        return data;
      }
    };
    const filterProductRate = () => {
      if (rate) {
        const filterRate = filterProductCategory().filter((item) => {
          if (item.rating >= rate) {
            return item;
          } else {
            return false;
          }
        });
        return filterRate;
      } else {
        return filterProductCategory();
      }
    };
    const filterProductPriceMin = () => {
      if (minPrice) {
        const filterPriceMin = filterProductRate().filter((item) => {
          if (item.price.substr(1) >= minPrice) {
            return item;
          } else {
            return false;
          }
        });
        return filterPriceMin;
      } else {
        return filterProductRate();
      }
    };
    const filterProductPriceMax = () => {
      if (maxPrice) {
        const filterPriceMax = filterProductPriceMin().filter((item) => {
          if (item.price.substr(1) <= maxPrice) {
            return item;
          } else {
            return false;
          }
        });
        dispatch({
          type: "FILTER_PRODUCT",
          payload: filterPriceMax,
        });
      } else {
        dispatch({
          type: "FILTER_PRODUCT",
          payload: filterProductRate(),
        });
      }
    };
  };
};
