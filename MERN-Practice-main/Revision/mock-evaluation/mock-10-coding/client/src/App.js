
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import ProtectedRoute from './Components/ProtectedRoute';
import CreateTodo from './Pages/CreateTodo';
import DeletePage from './Pages/DeletePage';
import EditTodo from './Pages/EditTodo';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Todo from './Pages/Todo';
import Todos from './Pages/Todos';

function App() {
  return (
    <div className="App">
    <Navbar/>
       <Routes>
       <Route path="/" element={<ProtectedRoute Component={Home} />} />

      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/todos" element={<ProtectedRoute Component={Todos} />} />
      <Route path="/todos/create" element={<ProtectedRoute Component={CreateTodo} />}/>
      <Route path="/todos/:id" element={<ProtectedRoute Component={Todo} />}/>
      <Route path="/edit/:id" element={<ProtectedRoute Component={EditTodo} />}/>

      
      <Route path="/delete/:id" element={<ProtectedRoute Component={DeletePage} />}/>
    </Routes>
    </div>
  );
}

export default App;
