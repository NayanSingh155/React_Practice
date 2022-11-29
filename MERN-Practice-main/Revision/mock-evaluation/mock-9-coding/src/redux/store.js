import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { dataReducer } from "./data/reducer";
const rootReducer = combineReducers({
  employee: dataReducer,
  auth: authReducer,
});
const composeEnhancers =
  typeof window === "object" && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
    ? window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = legacy_createStore(rootReducer, enhancer);
