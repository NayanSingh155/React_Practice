import React from "react";
function Allbtn(props){
    return (
        <div className="Btn">
            <button id={props.id}>{props.name}</button>
        </div>
    )
}
export default Allbtn
