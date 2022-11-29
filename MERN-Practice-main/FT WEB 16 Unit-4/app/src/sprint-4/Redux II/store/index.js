import { legacy_createStore } from "redux";
import { reducer } from "./reducer.js";
const initialState={
    count:0,
    todos:{
        isError:false,
        isLoading:false,
        data:[]
    }
}
export const store=legacy_createStore(reducer,initialState)