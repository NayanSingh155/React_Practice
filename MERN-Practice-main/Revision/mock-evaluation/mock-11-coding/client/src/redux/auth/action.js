// https://mock11muskan.herokuapp.com/
import axios from "axios";

export const GET_LOGIN_LOADING = "GET_LOGIN_LOADING";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_ERROR = "GET_LOGIN_ERROR";

//login

const getLoginloading = () => ({
  type: GET_LOGIN_LOADING,
});
const getLoginSuccess = (payload) => ({
  type: GET_LOGIN_SUCCESS,
  payload,
});
const getLoginError = (payload) => ({
  type: GET_LOGIN_ERROR,
  payload,
});

export const getLoginToken = (payload) => (dispatch) => {
  dispatch(getLoginloading());
  axios.post("https://mock11muskan.herokuapp.com/auth/login",payload)
    .then((res) => {
      if (res.data.message) {
        dispatch(getLoginError(res.data.message));
      } else if (res.data.token) {
        dispatch(getLoginSuccess(res.data));
        localStorage.setItem("token", res.data.token);
        console.log(res.data);
      }
    })
    .catch((error) => dispatch(getLoginError()));
};
export const callForRegister = (payload)=>()=>{
    axios.post(`https://mock11muskan.herokuapp.com/auth/signup`,payload)
    .then(({data})=>console.log(data))
    .catch((err)=>alert(err.data.error))
}