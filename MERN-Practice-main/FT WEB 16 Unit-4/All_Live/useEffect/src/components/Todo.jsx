import {useState ,useEffect} from "react"
export const Todo =()=>{

    
    const [todos,setTodos] =useState([])
    const [text,setText] = useState("");
    const [page,setPage] = useState(1)
    const getTodo = ()=>{
        fetch(`http://localhost:8000/todos?_page=${page}&_limit=3`).then((d)=>d.json()).then(res=>{
             setTodos(res)
            console.log(res)
        })
    }
    useEffect(()=>{
        getTodo();
            },[page]);
    return <div>
        <input value = {text} type ="text" placeholder ='enter todo' onChange={(e)=>setText(e.target.value) }/>
        <button onClick={()=>{
            
            const payload ={
                title:text,
                status :false
            };
            fetch ("http://localhost:8000/todos",{
                method:"POST",
                body:JSON.stringify(payload),
                headers:{
                    "content-type": "application/json"
                }
            }).then(()=>{
                getTodo();
                setText("")
            })
            }}>add todo </button>
        {todos.map((e) =>(
            <div>{e.title} </div>
        )
            
        )}
        <button onClick={()=>setPage(page-1)}>Prev</button>
        <button onClick={()=>setPage(page+1)}>Next</button>
    </div>
}