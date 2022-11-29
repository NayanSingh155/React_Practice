import axios from "axios";
export const DATA = "DATA";
export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const getalldata = (payload) => ({
  type: DATA,
  payload,
});
export const getLoading = () => ({
  type: LOADING,
});

export const getError = () => ({
  type: ERROR,
});

export const getEmployeesData = () => (dispatch) => {
  dispatch(getLoading());
  axios
    .get("https://mock8muskan.herokuapp.com/employees")
    .then((res) => dispatch(getalldata(res.data)))
    .catch((err) => dispatch(getError()));
};
