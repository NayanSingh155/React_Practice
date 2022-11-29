import axios from 'axios';

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginSuccess = (payload)=>({
    
    type: LOGIN_SUCCESS,
    token:payload.token,
    userData:payload.user
})


export const loginFailure = ()=>({
    type: LOGIN_FAILURE
})



export const callForLogin = (payload)=>(dispatch)=>{
    axios.post(`https://mockmuskan10.herokuapp.com/auth/login`,payload)
    .then(({data})=>{
        console.log(data.token)
        dispatch(loginSuccess(data))})
    .catch((err)=>console.log(err))
}

export const callForRegister = (payload)=>()=>{
    axios.post(`https://mockmuskan10.herokuapp.com/auth/signup`,payload)
    .then(({data})=>console.log(data))
    .catch((err)=>alert(err.data.error))
}
