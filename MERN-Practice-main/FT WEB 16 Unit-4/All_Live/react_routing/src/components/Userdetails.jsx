import React, { useEffect ,useState} from 'react'
import {useParams} from "react-router-dom"
function Userdetails() {
    const {userid} =useParams();
    const [user,setUser]=useState({});
    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${userid}`).then(d=>d.json()).then(d=>{
            setUser(d.data);
        })
    },[userid]);
  return (
    <div>
        {/* fetch data of user {userid} */}
        <img src={user.avatar} alt="test"/>
        {user.first_name}{user.last_name}
        contact:{user.email}
    </div>
  )
}

export default Userdetails