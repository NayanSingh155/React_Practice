import {
    GET_LOGIN_ERROR,
    GET_LOGIN_LOADING,
    GET_LOGIN_SUCCESS,
  } from "./action";
  
  const initState = {
    loading: false,
    res: null,
    error: null,
  };
  
  export const authReducer = (state = initState, action) => {
    switch (action.type) {
      case GET_LOGIN_LOADING:
        return {
          ...state,
          loading: true,
        };
  
      case GET_LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          res: action.payload,
        };
      case GET_LOGIN_ERROR:
        return {
          ...state,
          loading: false,
          res: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };