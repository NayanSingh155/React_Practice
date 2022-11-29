import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
// import { Todo } from "./components/Todo";

function App() {
  const [show,setShow] =useState(true);
  return <div className="App">useEffect
  
  {/* <Todo/> */}
  {show?<Timer/>:null}
  <button onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button>
  </div>;
}

export default App;
