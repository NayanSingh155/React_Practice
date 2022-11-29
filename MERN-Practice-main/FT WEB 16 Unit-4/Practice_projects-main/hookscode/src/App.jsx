import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import HookMouse from './components/useEffect/HookMouse'
// import HookCounterone from './components/useEffect/HookCounterone'
// import WithObject from './components/WithObject'
// import WithArr from './components/usestate/WithArr'

function App() {
 

  return (
    <div className="App">
    <h4>Hooks</h4>
   {/* <WithArr/> */}
   {/* <HookCounterone/> */}
   <HookMouse/>
    </div>
  )
}

export default App
