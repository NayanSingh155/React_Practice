import { LOADING, DATA, ERROR } from "./action";

const iniState = {
  data: [],
  loading: false,
  error: false,
};

export const dataReducer = (state = iniState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case DATA:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };

    case ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: "",
      };

    default:
      return state;
  }
};
