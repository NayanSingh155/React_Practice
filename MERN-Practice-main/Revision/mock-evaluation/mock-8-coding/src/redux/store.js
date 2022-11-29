import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from 'redux-thunk';
import { authReducer } from "./auth/reducer";
import { employeeReducer } from "./employees/reducer";
const rootReducer = combineReducers({
    employee: employeeReducer,
    auth: authReducer

   
})
const composeEnhancers =
  typeof window === 'object' && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
    ? window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
 
);

export const store = legacy_createStore(rootReducer,enhancer);