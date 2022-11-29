
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import Navbar from './Components/Navbar';
import { Blogs } from './Pages/Blogs';
import { Blog } from './Pages/Blog';
import { CreateBlog } from './Pages/CreateBlog';
import EditBlog from './Pages/EditBlog';
import DeletePage from './Pages/DeletePage';
import Delete from './Pages/Delete';
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/:id" element={<Blog/>}/>
        <Route path="/blogs/create" element={<CreateBlog/>}/>
        <Route path="/blogs/:id/edit" element={<EditBlog/>}/>
        <Route path="/blogs/:id/delete" element={<DeletePage/>}/>
        <Route path="/blogs/trash" element={<Delete/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
