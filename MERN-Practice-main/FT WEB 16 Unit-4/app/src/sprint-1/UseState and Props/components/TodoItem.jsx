import React from "react";


let TodoItem = ({color,title})=> {
return (
    <div  style={{ color }}>
       {title} <input className="ch" type="checkbox" />
    </div>
)
}

export default TodoItem;