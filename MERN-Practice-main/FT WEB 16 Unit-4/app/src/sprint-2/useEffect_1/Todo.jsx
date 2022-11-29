import React from 'react'

import TodoItem from './TodoItem.jsx'


function Todo1() {
    
    const [Todo,setTodo]=React.useState("")
    const [TodoList1,setTodoList1]=React.useState([])
    const [page,setPage]=React.useState(1)
    const handleChange=(e)=> {
        setTodo(e.target.value)
    }
    let handlePage=async(value)=>{
      try{
        let res = await fetch(`http://localhost:8000/todo?_page=${page}&_limit=5`)
        let data = await res.json()
           console.log(data)
           if(data.length>0){
             setPage(page+value)
             setTodoList1(data)
           }
           
           // console.log(TodoList1)
       }
       catch(e){
         console.log(e)
       }

    }
     const handleClick=(data)=>{
       let value=Todo.trim()
       if(value){

        setTodoList1([...TodoList1,data])
        // console.log(TodoList1)
        setTodo("")
       }
     }
    React.useEffect(()=>{
     
         get()

    },[])

    const get = async () => {
      try{
       let res = await fetch(`http://localhost:8000/todo?_page=${page}&_limit=5`)
       let data = await res.json()
          // console.log(data)
          if(data.length>0){
            setTodoList1(data)
          }
          // console.log(TodoList1)
      }
      catch(e){
        console.log(e)
      }
       }
   const postData= async ()=>{
     try{
      let res = await fetch(`http://localhost:8000/todo`,{
        "method":"POST",
        "headers":{"content-type":"application/json"},
        "body":JSON.stringify({
         title:Todo,
          status:false
        })
      })
      let data = await res.json()
       handleClick(data)
        // console.log(TodoList1)
         
        //  setTodoList1
        
          }
     catch(e){
       console.log(e)
     }
    }
   
    let handleDelete=(id)=>{
      let upData=TodoList1.filter(el=> el.id!==id)
      setTodoList1(upData)

    }
    
    let handleEdit=(newTodo)=>{
      let upData=TodoList1.map(el=> {
        if(el.id===newTodo.id){
          return newTodo
        }
        else{
          return el
        }
      })
      setTodoList1(upData)

    }


    return (
    <div>
    {page}
    <h1>
        Todo Lists
    </h1>
    <input type="text" placeholder='Enter Todo' value={Todo} onChange={handleChange}></input>
    <button onClick={postData}>Add</button>
         <div>
          {
            TodoList1.map((el)=>{
        return(
          
               
            <TodoItem handleEdit={handleEdit} handleDelete={handleDelete} {...el} key={el.id}/>
          
        )
    })
          }
         </div>
        <button onClick={()=>{if(page>1){handlePage(-1)}}}>Prev</button>
        <button onClick={()=>handlePage(1)}>Next</button>
    </div>
  )
}

export default Todo1