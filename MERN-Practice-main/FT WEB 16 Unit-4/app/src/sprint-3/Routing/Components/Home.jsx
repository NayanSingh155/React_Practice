import React from 'react'
import {  useNavigate } from 'react-router-dom'
import style from "./style.module.css"
import { Link } from 'react-router-dom'
function Home() {
  const [data,setData]=React.useState([]) 
  const Navigate=useNavigate
  const get= async ()=> {
    try{
      let res = await fetch(`https://blog-search-u3c4.herokuapp.com/api/blogs/psychology`)
      let data = await res.json()
    
      setData(data)
      // console.log(data)
    }
    catch(e) {
      console.log(e)
    }
  }
 
  React.useEffect(()=>{
    get()
  },[])
  return (
    <div  className={style.container}>
    {  data.map((e,i)=>{
      {/* console.log(e) */}
      return (
        <div className={style.con} key={i}>
        <img src={e.urlToImage}/>
        <div>
        <h2>{e.title}</h2>
        <h4>Written By {e.author}</h4>
        <h4>Description: {e.description}</h4>
        <h4>Published at {e.publishedAt}</h4>
        <Link to = {`/${e.tite}`}><button>Watch Here</button></Link>
        </div>
        </div>
      )
      })
    }
    </div>
  )
}

export default Home