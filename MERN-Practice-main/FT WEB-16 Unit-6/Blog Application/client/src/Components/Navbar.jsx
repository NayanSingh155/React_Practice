import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function Navbar(){
    const navigate=useNavigate()
return (
    <>
       <div className='Navbar'>
       <div onClick={()=>navigate("/")}>
        <img src="https://logos-download.com/wp-content/uploads/2016/07/Blogger_logo_wordmark.png"/>
       </div>
        <ul>
           <Link to="/blogs"> <li>Blogs</li></Link>
            <Link to="/blogs/create"><li>Create</li></Link>
            <Link to="/blogs/trash"> <li>Trash</li></Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
        </ul>
       </div>
    </>
)
}
export default Navbar;