import {
  GET_DATA,
  GET_DATA_ERROR,
  GET_LOADING_DATA,
  GET_LOGIN_ERROR,
  GET_LOGIN_LOADING,
  GET_LOGIN_SUCCESS,
} from "./action";

const initState = {
  loading: false,
  error: null,
  isAuth: false,
  res: "",
  dLoading: false,
  dError: false,
  data: [],
};

export const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_DATA_ERROR:
      return {
        ...state,
        dLoading: false,
        data: [],
        dError: true,
      };
    case GET_LOADING_DATA:
      return {
        ...state,
        dLoading: true,
        data: [],
      };
    case GET_DATA:
      return {
        ...state,
        dLoading: false,
        data: action.payload,
      };
    case GET_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        res: action.payload,
        isAuth: true,
      };
    case GET_LOGIN_ERROR:
      return {
        ...state,
        isAuth: false,
        loading: false,
        token: null,
        error: true,
      };
    default:
      return state;
  }
};
