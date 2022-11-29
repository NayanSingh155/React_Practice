import axios from "axios";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useState } from "react";
import "../App.css";
import { AuthContext } from "../Context/authContext";
export const Blogs = function () {
  const [data, setData] = useState([]);
  const { isLoadng, setIsLoading, succ, setIsErr, isErr, setSucc } =
    useContext(AuthContext);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get("http://localhost:8080/blogs")
        .then(({ data }) => {
          setData(data);
          setIsLoading(false);
          setSucc(true);
        })
        .catch((err) =>{
          setIsLoading(false)
          setIsErr(true)
        });
    }, 2000);
  }, []);
  
  if(isLoadng){
    return(
        <>
            <h2>Loading..</h2>
        </>
    )
  }
  else if(isErr){
    return(
        <>
            <h2>Something went wrong..</h2>
        </>
    )
  }
  else{
    return (
        <>
          <h2>Blogs</h2>
    
          <div className="blogs">
            {data.map((e, i) => {
              if (!e.deleted) {
                return (
                    <div key={i}> 
                    
                      <h3>{e.title}</h3>  
                      <p>Created At {e.createdAt}</p>
                      <button className="btn"> <Link to={`/blogs/${e._id}`} >Read</Link></button>
                  </div>
                );
              }
            })}
          </div>
        </>
      );
  }
};
