import {useState} from 'react'
import './App.css'
import {useFetch} from "./hooks/useFetch"
// import {useTimeout} from './hooks/useTimeout'
import axios from 'axios'
const URL ="https://api.github.com/search/users";
type UserType ={
  id:number;
  login:string;
  avatar_url: string;
}
function App() {
  const [text,setText]=useState("");
  const [data,setData] = useState<UserType[]>([])
const {err,loading} =useFetch(URL,{
  per_page:5,
  q:text
})
return ( <div className="App">
    <input value={text} onChange={(e)=>setText(e.target.value)}/>
    <button onClick={()=>{
      // axios.get(URL,{
      //   params:{
      //     per_page:5,
      //     q:text
      //   }
      // }).then(({data})=>{
      //   setData(data.items)
      // })
    }}>Search</button>
         {/* <h1>Hello</h1> */}
         {data.map((user)=>{
           return (
             <div key={user.id}>{user.login}
             <div>
               <img width={200}height={200} src={user.avatar_url} alt=""/>
             </div>
             </div>
           )
         })}
    </div>
  )
}

export default App
