import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"
const ProtectedRoute = ({Component}) => {
    const {isAuth} =useSelector((store)=>store.admin)
    const navigate =useNavigate()
    useEffect(()=>{
        if(!isAuth)
        return navigate("/admin")
    })
  return (
    <div>
        <Component/>
    </div>
  )
}

export default ProtectedRoute