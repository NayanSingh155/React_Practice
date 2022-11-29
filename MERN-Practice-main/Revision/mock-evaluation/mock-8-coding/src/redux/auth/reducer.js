import { saveData , loadData, deleteData} from "../../Components/Local";
import { BEFORE_GET_USER_DATA, GET_USER_DATA, LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_SUCCESS } from "./action";

const token = loadData('token');
const iniState = {
    isAuth: token?true:false,
    token: token || '',
    isRegister: false,
    userData: {},
    loading: false,
    error: false,
}

export const authReducer = (state=iniState,{type,payload})=>{
    switch (type) {
        case REGISTER_SUCCESS:
            return{
                ...state,
                isRegister: true
            }

        case LOGIN_SUCCESS:
            saveData('token',payload)
            return{
                ...state,
                isAuth: true,
                token: payload,
            }
        
        case LOGIN_FAILURE:
            deleteData('token')
            return{
                ...state,
                isAuth: false,
                token: ''
            }
        
        case GET_USER_DATA:
            return{
                ...state,
                loading: false,
                error: false,
                userData: payload,
            }
        
        case BEFORE_GET_USER_DATA:
            return{
                ...state,
                loading: true,
                error: false,
            }
        default:
            return state;
    }
}