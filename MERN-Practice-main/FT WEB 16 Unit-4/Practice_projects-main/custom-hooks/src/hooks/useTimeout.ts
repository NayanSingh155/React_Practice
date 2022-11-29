import{useState,useEffect} from 'react'

export const useTimeout=(delay:number) =>{
    const [toShow,setToShow]=useState(false)
    useEffect(() =>{
        let id =setTimeout(() =>{
            setToShow(true)
        },delay);
        return () =>clearTimeout(id)
    },[])

 return toShow;
}

