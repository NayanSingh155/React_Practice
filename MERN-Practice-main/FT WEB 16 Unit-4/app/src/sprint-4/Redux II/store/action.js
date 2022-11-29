import axios from "axios";
import { INCREMENT,DECREMENT, GET_TODOS, DELETE_TODOS, GET_TODOS_REQUEST, GET_TODOS_ERROR, ADD_TODOS } from "./actionType";

export const counterIncrement = (payload)=> ({
    type:INCREMENT,
    payload
})
export const counterDecrement = (payload)=> ({
    type:DECREMENT,
    payload
})
 export const get =async(dispatch)=>{
    dispatch({
        type:GET_TODOS_REQUEST,
    })
   try{
    let res = await axios.get("http://localhost:8000/todo");
    let data = await res.data
 dispatch({
    type:GET_TODOS,
    payload:data
})
   }
   catch{
    dispatch({
        type:GET_TODOS_ERROR,
    
    })
   }
 }
 export const handleDelete=async(id,dispatch)=>{
     
    let res= await axios.delete(`http://localhost:8000/todo/${id}`)
       
  dispatch({
      type:DELETE_TODOS,
      payload:id
  })

}
export const addTodo =async (payload) => {
    let res= await axios.post("http://localhost:8000/todo")
    let data= await res.data
    
  };
