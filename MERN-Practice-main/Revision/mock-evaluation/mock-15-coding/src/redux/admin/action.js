import axios from "axios";
export const GET_LOGIN_LOADING = "GET_LOGIN_LOADING";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_ERROR = "GET_LOGIN_ERROR";
export const GET_DATA = "GET_DATA";
export const GET_LOADING_DATA = "GET_LOADING_DATA";
export const GET_DATA_ERROR = "GET_DATA_ERROR";
const getLoginloading = () => ({
  type: GET_LOGIN_LOADING,
});
const getDataLoading = () => ({
  type: GET_LOADING_DATA,
});
const getDataError = () => ({
  type: GET_DATA_ERROR,
});

const getLoginSuccess = (payload) => ({
  type: GET_LOGIN_SUCCESS,
  payload,
});
const getLoginError = (payload) => ({
  type: GET_LOGIN_ERROR,
  payload,
});
const getData = (payload) => ({
  type: GET_DATA,
  payload,
});
export const getLoginToken = () => (dispatch) => {
  dispatch(getLoginloading());
  axios
    .post("https://reqres.in/api/login", {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    })
    .then((res) => {
      //   console.log(res);
      dispatch(getLoginSuccess(res.data.token));
    })
    .catch((error) => dispatch(getLoginError()));
};
export const getDataUsers = () => (dispatch) => {
  dispatch(getDataLoading());
  axios
    .get("https://mock15.herokuapp.com/users")
    .then(({ data }) => dispatch(getData(data)))
    .catch(() => dispatch(getDataError()));
};
export const getFemale = () => (dispatch) => {
  dispatch(getDataLoading());
  axios
    .get(`https://mock15.herokuapp.com/users/?gender=Female`)
    .then(({ data }) => dispatch(getData(data)))
    .catch(() => dispatch(getDataError()));
};
export const getMale = () => (dispatch) => {
  dispatch(getDataLoading());
  axios
    .get(`https://mock15.herokuapp.com/users/?gender=Male`)
    .then(({ data }) => dispatch(getData(data)))
    .catch(() => dispatch(getDataError()));
};
export const getCountry = (country) => (dispatch) => {
  dispatch(getDataLoading());
  axios
    .get(`https://mock15.herokuapp.com/users/?country=${country}`)
    .then(({ data }) => dispatch(getData(data)))
    .catch(() => dispatch(getDataError()));
};
export const getName = (name) => (dispatch) => {
  dispatch(getDataLoading());
  axios
    .get(`https://mock15.herokuapp.com/users/?name=${name}`)
    .then(({ data }) => dispatch(getData(data)))
    .catch(() => dispatch(getDataError()));
};
