import axios from 'axios';
import { saveData } from '../../Components/Local';


export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const GET_USER_DATA = 'GET_USER_DATA';
export const BEFORE_GET_USER_DATA = 'BEFORE_GET_USER_DATA';

export const registerSuccess = (payload)=>({
    type: REGISTER_SUCCESS,
    payload,
})

export const registerFailure = ()=>({
    type: REGISTER_FAILURE
})


export const loginSuccess = (payload)=>({
    type: LOGIN_SUCCESS,
    payload: payload.token
})

export const loginFailure = ()=>({
    type: LOGIN_FAILURE
})

export const getData = (payload)=>({
    type: GET_USER_DATA,
    payload
})

export const beforegetData = ()=>({
    type: BEFORE_GET_USER_DATA,
})

export const register = (data)=>(dispatch)=>{
    axios.post('https://masai-api-mocker.herokuapp.com/auth/register',data)
    .then((res)=>{
        console.log(res.data);
         if(!res.data.error){
            dispatch(registerSuccess(data));
         }else{
            alert('User already exist')
         }
    });
}

export const login = (data)=>(dispatch)=>{
    axios.post('https://masai-api-mocker.herokuapp.com/auth/login',data)
    .then((res)=>{
        console.log(res.data);
        if(!res.data.error){
            saveData('userData',data);
            dispatch(loginSuccess(res.data))
        }else{
           
        }
    }).catch((err)=>{
        console.log(err);
       
    })
}

export const getUser = (userdata,token)=>(dispatch)=>{
    dispatch(beforegetData());
    axios.get(`https://masai-api-mocker.herokuapp.com/user/${userdata.username}`,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    })
    .then((res)=>dispatch(getData(res.data)))
    .catch((err) => console.log(err))
}