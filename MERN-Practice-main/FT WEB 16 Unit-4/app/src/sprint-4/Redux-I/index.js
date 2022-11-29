import Store from "./store.js"
import { reducer } from "./reducer.js"
const store= new Store(reducer,{
    count:0
})

let counter=document.getElementById("count")
let inc = document.getElementById("inc")
let dec = document.getElementById("dec")
let add =document.getElementById("add")
let minus =document.getElementById("substract")
let mul =document.getElementById("multiply")
let div =document.getElementById("division")
 counter.innerText=store.getstate().count
inc.addEventListener("click",function(){
   store.dispatch({
       type:"INCREMENT"
   })
   counter.innerText=store.getstate().count
})

dec.addEventListener("click",function(){
    store.dispatch({
        type:"DECREMENT"
    })
    counter.innerText=store.getstate().count
})
add.addEventListener("click",function(event){

    event.preventDefault()
    let value=document.getElementById("value").value
    console.log(value);
    store.dispatch({
        type:"ADD",
        payload:Number(value)
    })

    counter.innerText=store.getstate().count
})
minus.addEventListener("click",function(event){

    event.preventDefault()
    let value=document.getElementById("value").value
    console.log(value);
    store.dispatch({
        type:"SUBSTRACT",
        payload:Number(value)
    })

    counter.innerText=store.getstate().count
})
mul.addEventListener("click",function(event){

    event.preventDefault()
    let value=document.getElementById("value").value
    console.log(value);
    store.dispatch({
        type:"MULTIPLY",
        payload:Number(value)
    })

    counter.innerText=store.getstate().count
})
div.addEventListener("click",function(event){

    event.preventDefault()
    let value=document.getElementById("value").value
    console.log(value);
    store.dispatch({
        type:"DIVISION",
        payload:Number(value)
    })

    counter.innerText=store.getstate().count
})