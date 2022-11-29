import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./action";

const iniState = {
  isAuth: false,
  userData: {},
  loading: false,
};

export const authReducer = (state = iniState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        userData: payload,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        userData: {},
      };

    default:
      return state;
  }
};
