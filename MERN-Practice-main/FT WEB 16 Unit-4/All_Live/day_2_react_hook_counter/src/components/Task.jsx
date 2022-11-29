import React from 'react';
import { TaskItem } from './TaskItem';
function Task(){
    const handleChange=(e)=>{
        // console.log(e.target);
        const {value}=e.target;
        setQuery(value)
    }
    const [query ,setQuery] =React.useState("");
    const [tasks,setTasks]=React.useState([]);
    const handleAdd =()=>{
        const payload={
            title :query,
            status:false
        };
        let newTasks=[...tasks,payload];
        setTasks(newTasks)
        console.log(tasks);
    }
    return (
        <div className="task" >
        <h1>Tasks</h1>
        <input value={query} 
        onChange={handleChange} 
         placeholder="add something"/>
         <button onClick={handleAdd} >Add</button>
         <div>{
             tasks.map(item=>{
                 return <TaskItem title={item.title} status={item.status}/>
                     
                 
             })
         }</div>
    </div>
      );
}
export { Task };