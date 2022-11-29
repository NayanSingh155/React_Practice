
import './App.css';
import {Routes,Route} from 'react-router-dom';
import StopWatch from './components/StopWatch/StopWatch';
import Timer from './components/Timer/Timer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
   
    <Navbar />
    
<Routes>
  <Route path="/" element={<StopWatch/>}></Route>
  <Route path="/timer" element={<Timer/>}></Route>
</Routes>
    </div>
  );
}

export default App;
