import React from 'react';
function TaskItem({title,status}){
    return (
        <div>
            <h3>{
                `${title} -${status}`
            }</h3>
        </div>
        )
}
export { TaskItem}