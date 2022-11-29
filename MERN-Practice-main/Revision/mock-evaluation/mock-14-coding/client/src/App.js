import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
      </Routes>
    </div>
  );
}

export default App;
//
