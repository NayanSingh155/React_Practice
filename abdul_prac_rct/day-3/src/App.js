// import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Profile from './Components/Profile';


function App() {
  return (
    <div className="App">
      <h1>{name}</h1>
        <Profile/>
        <Button text="Click Here"/>
    </div>
  );
}

export default App;
