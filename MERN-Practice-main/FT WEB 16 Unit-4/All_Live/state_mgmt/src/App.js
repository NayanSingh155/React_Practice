
import './App.css';
import { ChildToParent } from './components/ChildToParent';
import { ParentToChild } from './components/ParentToChild';
import Sibling from './components/Sibling';
import Todo from './components/ToDo';

function App() {
  return (
    <div className="App">
     <h1>state management</h1>
     <Todo/>
     <ParentToChild/>
     <ChildToParent/>
     <Sibling/>
    </div>
  );
}

export default App;
