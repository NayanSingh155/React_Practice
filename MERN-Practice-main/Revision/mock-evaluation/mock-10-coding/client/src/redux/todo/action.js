import axios from "axios";
export const LOADING = "LOADING";
export const GET_ALL_TODO = "GET_ALL_TODO";
export const GET_SINGLE_TODO = "GET_SINGLE_TODO";

export const ERROR = "ERROR";

export const loading = ()=>({
    type: LOADING
})

export const error = ()=>({
    type: ERROR
});

export const getAllTODO = (payload)=>({
    type: GET_ALL_TODO,
    payload
})

export const getOneTodo = (payload)=>({
    type: GET_SINGLE_TODO,
    payload
})
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;


export const callForAllTODO = ()=>(dispatch)=>{
    dispatch(loading());
    axios.get(`https://mockmuskan10.herokuapp.com/todo`)
    .then(({data})=>dispatch(getAllTODO(data)))
    .catch((e)=>dispatch(error()))
}


export const callForSingleBlog = (id)=>(dispatch)=>{
    dispatch(loading());
    axios.get(`https://mockmuskan10.herokuapp.com/todo`)
    .then(({data})=>dispatch(getOneTodo(data.blog)))
    .catch((e)=>dispatch(error()))
}




export const callForCreateBlog = (form,cate)=>(dispatch)=>{
    axios.post("https://mockmuskan10.herokuapp.com/todo/create",form)
    .catch((err)=>dispatch(error()))
}





