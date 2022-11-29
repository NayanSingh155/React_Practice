import { DECREMENT, GET_TODOS, INCREMENT,DELETE_TODOS, GET_TODOS_REQUEST, GET_TODOS_ERROR } from "./actionType.js"

export {INCREMENT,DECREMENT} from "./actionType.js"
export const reducer=(state,action)=>{
    switch(action.type){
        case INCREMENT : {
            return {
                ...state,
                count:state.count+action.payload,
            }
        }
        case DECREMENT : {
          return {
              ...state,
              count:state.count-action.payload,
          }
      }
      case GET_TODOS : {
        return {
            ...state,
            todos:{
                isLoading:false,
                isError:false,
                data:action.payload
            }
        }
    }
    case GET_TODOS_REQUEST : {
        return {
            ...state,
            todos:{
                isLoading:true,
                isError:false,
                data:[]
            }
        }
    }
    case GET_TODOS_ERROR : {
        return {
            ...state,
            todos:{
                isLoading:false,
                isError:true,
                data:[]
            }
        }
    }
    case DELETE_TODOS : {
        return {
            ...state,
            todos:state.todos.filter(todo=> todo.id!==action.payload)
        }
    }
    
      default:{
          return state
      }
    
}
}