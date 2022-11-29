import axios from "axios";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const GET_USER_DATA = "GET_USER_DATA";
export const LOADING = "LOADING";

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const getData = (payload) => ({
  type: GET_USER_DATA,
  payload,
});

export const loading = () => ({
  type: LOADING,
});

export const register = (data) => (dispatch) => {
  axios.post("https://mock9muskan.herokuapp.com/users", data);
};

export const login = (data) => (dispatch) => {
  axios.get("https://mock9muskan.herokuapp.com/users").then((res) => {
    res.data.map((e) => {
      if (e.email === data.email && e.password === data.password) {
        dispatch(loginSuccess(e));
      }
    });
  });
};
