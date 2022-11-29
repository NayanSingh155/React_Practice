import { ERROR, FILTER, GET_DATA, LOADING } from "./action"

const initState = {
    loading: false,
    data: [],
    error: false,
    filter:{}
}

export const reducer = (state = initState, action) => {
 const {type,payload}=action
    switch (type) {
       
        case FILTER:
            console.log(payload)
            return {
                ...state,
                filter:payload
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_DATA:
            return {
                ...state,
                loading: false,
                data:payload
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                data: [],
                error: true
            }
        default:
            return state
    }
}