export const reducer=(state,action)=> {
    let value=document.getElementById("value").value
    // console.log(action)
    switch(action.type){
      case "INCREMENT" : {
          return {
              ...state,
              count:state.count++
          }
      }
      case "DECREMENT" : {
        return {
            ...state,
            count:state.count--
        }
    }
    case "ADD" : {
        let x = action.payload
        let updateValue=x+state.count
        return {
            ...state,count:state.count=updateValue
        }
        
    }
    case "SUBSTRACT" : {
        let x = action.payload
        let updateValue=state.count-x
        return {
            ...state,count:state.count=updateValue
        }
        
    }
    case "MULTIPLY" : {
        let x = action.payload
        let updateValue=x*state.count
        return {
            ...state,count:state.count=updateValue
        }
        
    }
    case "DIVISION" : {
        let x = action.payload
        let updateValue=state.count/x
        return {
            ...state,count:state.count=updateValue
        }
        
    }
    default  : {
        return state
    }
  }
}