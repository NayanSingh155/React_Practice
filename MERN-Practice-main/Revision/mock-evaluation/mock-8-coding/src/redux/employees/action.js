import axios from 'axios';
export const BEFORE_EMPLOYEE_DATA = 'BEFORE_EMPLOYEE_DATA';
export const EMPLOYEE_DATA = 'EMPLOYEE_DATA';
export const ERROR_EMPLOYEE_DATA = 'ERROR_EMPLOYEE_DATA';

export const SINGLE_EMPLOYEE_DATA = 'SINGLE_EMPLOYEE_DATA';

export const getalldata = (payload)=>({
    type: EMPLOYEE_DATA,
    payload
})

export const beforegetalldata = ()=>({
    type: BEFORE_EMPLOYEE_DATA
})

export const errorgetalldata = ()=>({
    type: ERROR_EMPLOYEE_DATA
})

export const getSingleData = (payload)=>({
    type: SINGLE_EMPLOYEE_DATA,
    payload
})

export const getEmployeesData = ()=>(dispatch)=>{
    dispatch(beforegetalldata());
    axios.get('https://mock8muskan.herokuapp.com/employees')
    .then((res)=>dispatch(getalldata(res.data)))
    .catch((err)=>dispatch(errorgetalldata()))
}

export const getsingleEmployeeData = (id)=>(dispatch)=>{
    dispatch(beforegetalldata());
    axios.get(`https://mock8muskan.herokuapp.com/employeesz/${id}`)
    .then((res)=>dispatch(getSingleData(res.data)))
    .catch((err)=>dispatch(errorgetalldata()))
}