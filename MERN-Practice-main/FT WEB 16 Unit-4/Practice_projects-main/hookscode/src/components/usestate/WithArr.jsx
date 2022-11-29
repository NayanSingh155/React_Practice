import React ,{useState} from 'react'


function WithArr() {
    const [arr,setArr] =useState([]);
    const [text,setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setArr([...arr,text]);
        setText("")
    }
    const handleChange =(e)=>{
        setText(e.target.value)
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleChange} value={text}/>
    <input type ="submit" />
    </form>
    {arr.map((e)=>{
        return <div>{e}</div>
    })}
    </div>
  )
}

export default WithArr