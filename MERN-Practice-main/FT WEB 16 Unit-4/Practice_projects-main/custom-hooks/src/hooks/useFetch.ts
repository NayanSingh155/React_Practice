import {useState,useEffect} from 'react'
import axios from 'axios'
export const useFetch=(url: string,params:Record<string,unknown>)=> {
    const [loading,setLoading] =useState(false);
    const [err,setError] = useState(false);
    const [data,setData] = useState([]);
 useEffect(() =>{
     setLoading(true);
     axios.get(url,{
        params:{
            ...params,
        },
     }).then(({data})=>{
         setLoading(false);
         setData(data);
     }).catch(()=>{
         setLoading(false);
         setError(true);
     })
 },[])
 return {loading,err,data}
}
