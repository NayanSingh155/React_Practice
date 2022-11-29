import React from 'react'
import { useParams } from 'react-router-dom'
import style from "./style.module.css"
function Blog() {
    const [data,setData]=React.useState({})
    const {title} = useParams();
    let get=async()=> {
      try{
        let res = await fetch(`https://blog-search-u3c4.herokuapp.com/api/blogs/psychology/${title}`)
        let data = await res.json()
      
        setData(data)
        // console.log(data)
      }
      catch(e) {
        console.log(e)
      }
    }    
    
    // console.log(param)
  return (
    <div className={style.about}>
     <div>
     <img src={data.urlToImage}/>
        <div>
        <h2>{data.title}</h2>
        <h4>Written By {data.author}</h4>
        <h4>Description: {data.description}</h4>
        <h4>Published at {data.publishedAt}</h4>
       
        </div>
     </div>

    </div>
  )
}

export default Blog