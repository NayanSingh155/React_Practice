import axios from "axios";
export const LOADING = "LOADING";
export const GET_DATA = "GET_DATA";
export const ERROR = "ERROR";
export const FILTER = "FILTER";
export const getLoading = () => ({
  type: LOADING,
});
export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});
export const getError = () => ({
  type: ERROR,
});
export const getFilter = (payload) => ({
  type: FILTER,
  payload,
});

//filter/?category=${c}&difficulty=${d}&num=${n}