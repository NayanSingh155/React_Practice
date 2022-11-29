
import './App.css';
import TOdo from './components/TOdo';
import {useState} from 'react'
import Form from './components/Form';
import Standup from './components/Standup';
function App() {
  const [isAuth,setisAuth] = useState(false);
  const handleLogin =()=>{
    setisAuth(true)
  }
  if(!isAuth) {
    return (
      <div> User is not logged In <button onClick={handleLogin}>LogIn</button></div>
    )
  }
  return !isAuth ? (
        <div> User is not logged In <button onClick={handleLogin}>LogIn</button></div>
      ): (
    <div className="App">
   ToDo

   <TOdo/>
   {/* <Form/> */}
    </div>
  );
//  return (
// <div>
//   <Standup/>
// </div>
 
//  )
}

export default App;
