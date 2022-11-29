import { BEFORE_EMPLOYEE_DATA, EMPLOYEE_DATA, ERROR_EMPLOYEE_DATA, SINGLE_EMPLOYEE_DATA } from "./action";

const iniState = {
    employeesData: [],
    loading: false,
    error: false,
    singleData: {}
}

export const employeeReducer = (state=iniState,{type,payload})=>{
    switch (type) {
        case BEFORE_EMPLOYEE_DATA:
            return{
                ...state,
                loading: true,
                error:false,
            }
    
        case EMPLOYEE_DATA:
            return{
                ...state,
                loading: false,
                error:false,
                employeesData: payload
            }
    
        case ERROR_EMPLOYEE_DATA:
            return{
                ...state,
                loading: false,
                error:true,
                employeesData: ''
            }
        case SINGLE_EMPLOYEE_DATA:
            return{
                ...state,
                loading: false,
                error: false,
                singleData: payload
            }
        default:
            return state;
 }
}