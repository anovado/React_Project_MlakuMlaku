import axios from "axios";

export const doLogin = (props) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      username: getState().user.userName,
      password: getState().user.passWord,
    };

    await axios
      .post("https://5eabeaa0a280ac001665771e.mockapi.io/login", bodyRequest)
      .then(async (response) => {
        if (response.data.hasOwnProperty("api_key")) {
          dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const changeInputUser = (e) => {
  return {
    type: "CHANGE_INPUT_USER",
    payload: e,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};
