
import './App.css';
import Wrapper ,{FancyButton }from "./components/Button/Button"
function App() {
  return (
    <div>
    <Wrapper variant={"Outline"}>
    <div className="App">
 <h1>Styled components</h1>
 <h3>Color Green</h3>
    </div>
    </Wrapper>
    <Wrapper>
    <div className="App">
 <h1>Styled components</h1>
 <h3>Color Green</h3>
    </div>
    </Wrapper>
    <FancyButton> Fancy Button</FancyButton>
    </div>
  );
}

export default App;
