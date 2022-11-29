import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./user/reducer";
import { adminReducer } from "./admin/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = legacy_createStore(rootReducer, enhancer);
