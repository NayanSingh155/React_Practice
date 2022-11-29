import { useState } from 'react'

import './App.css'
import Cart from './components/Cart'
import CounterReducer from './components/CounterReducer'

import Todo from './components/Todo'

function App() {
  // const [count, setCount] = useState(0);
  
  return (
    <div className="App">
   {/* <Todo/> */}
{/* <Counter/> */}
<Cart/>
<CounterReducer/>
    </div>
  )
}

export default App
