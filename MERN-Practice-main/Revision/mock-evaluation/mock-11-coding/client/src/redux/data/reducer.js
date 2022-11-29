import { GET_TASK_ERROR, GET_TASK_LOADING, GET_TASK_SUCCESS } from "./action"

const initState = {
    loading: false,
    data: [],
    error: false,
}

export const taskReducer = (state = initState, action) => {
 const {type,payload}=action
    switch (type) {

        case GET_TASK_LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_TASK_SUCCESS:
        // console.log(payload,"payload")
            return {
                ...state,
                loading: false,
                data:payload
            }
        case GET_TASK_ERROR:
            return {
                ...state,
                loading: false,
                task: [],
                error: true
            }
        default:
            return state
    }
}