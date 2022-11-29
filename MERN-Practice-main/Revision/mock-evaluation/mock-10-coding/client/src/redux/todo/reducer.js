import { ERROR, GET_ALL_TODO, GET_SINGLE_TODO, LOADING } from "./action";

const iniState = {
  loading: false,
  error: false,
  allTodos: [],

  singleTodo: [],
};

export const todoReducer = (state = iniState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_TODO:
      return {
        ...state,
        loading: false,
        error: false,
        allTodo: payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        allTodo: [],
      };

    case GET_SINGLE_TODO:
      return {
        ...state,
        loading: false,
        error: false,
        singleBlog: payload,
      };

    default:
      return state;
  }
};
