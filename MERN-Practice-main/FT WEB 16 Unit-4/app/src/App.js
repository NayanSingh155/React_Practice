import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import List from "./sprint-1/introduction to react/components/List.jsx";
import Joinus from "./sprint-1/introduction to react/components/Joinus.jsx";
import Settings from "./sprint-1/introduction to react/components/Settings.jsx";
import Contactus from "./sprint-1/introduction to react/components/Contactus.jsx";
// import Login from "./sprint-1/introduction to react/components/Login.jsx";
import Help from "./sprint-1/introduction to react/components/Help.jsx";
import Search from "./sprint-1/introduction to react/components/Search.jsx";
// import Home from "./sprint-1/introduction to react/components/Home.jsx";
import Download from "./sprint-1/introduction to react/components/Download.jsx";
import Allbtn from "./sprint-1/introduction to react/components/Allbtn.jsx";
// import Counter from "./sprint-1/UseState and Props/components/Counter.jsx";
import Todo from "./sprint-1/UseState and Props/components/Todo.jsx";
import Restaurant from "./sprint-1/List-keys-condittional_rendering/Restaurant.jsx";
import Todo1 from "./sprint-2/useEffect_1/Todo.jsx";
import Form from "./sprint-2/React_formss/Form.jsx";
import Display from "./sprint-2/React_formss/Display.jsx";
import Btn from "./sprint-3/Styled_components/Btn";
import Card_form from "./sprint-3/Styled_components/Credit Card/Card_form";
import DisplayCard from "./sprint-3/Styled_components/Credit Card/DisplayCard";
import CReditCard from "./sprint-3/Styled_components/Credit Card/CReditCard";
import Navbar from "./sprint-3/Context Api/Auth Context/Navbar";
import Status from "./sprint-3/Context Api/Auth Context/Status";
import AuthContextProvider from "./sprint-3/Context Api/Auth Context/AuthContextProvider";
import ThemeContextProvider from "./sprint-3/Context Api/Auth Context/ThemeProvider";
import Nav from "./sprint-3/Routing/Components/Nav";
import Footer from "./sprint-3/Routing/Components/Footer";
import { Route } from "react-router-dom";
import { Routes} from "react-router-dom";

import About from "./sprint-3/Routing/Components/About";
import Login from "./sprint-3/Routing/Components/Login";
import Contact from "./sprint-3/Routing/Components/Contact";
import FAQ from "./sprint-3/Routing/Components/FAQ";
import Home from "./sprint-3/Routing/Components/Home";
import Cart from "./sprint-3/Routing/Components/Cart";
import Blog from "./sprint-3/Routing/Components/Blog";
import { Provider } from "react-redux";
import { store } from "./sprint-4/Redux II/store";
import Counter from "./sprint-4/Redux II/components/Counter";
import Todos from "./sprint-4/Redux II/components/Todos";
import SingleTodo from "./sprint-4/Redux II/components/SingleTodo";


function App() {
  const [ShowCounter, setShowCounter] = React.useState(true);
  const [auth, setAuth] = React.useState(false);
  // const navigate=useNavigate()
  // React.useEffect(()=>{
  // navigate("/home")
  // },[])
  return (
    <div className="App">
      {/* sprint_1 day_1 */}
      {/* <h1>
      Problem 1
    </h1>
     <List/>
     <h1>Problem 2 (part i)</h1>
      <div className="P2">
      <Joinus/>
      <Settings/>
      <Login/>
      <Contactus/>
      <Search/> 
      <Help/>
      <Home/>
      <Download/> */}
      {/* </div>
      <h1>Problem 2 (part ii)</h1>
      <div className="P3">
        <Allbtn id="B2" name="Join US" ></Allbtn>
        <Allbtn id="B1" name="Settings" ></Allbtn>
        <Allbtn  id="B3" name="Log in"></Allbtn>
        <Allbtn id="B4" name="Contacts"></Allbtn>
        <Allbtn id="B5" name="Search"></Allbtn>
        <Allbtn id="B6" name="Help"></Allbtn>
        <Allbtn id="B7" name="Home"></Allbtn>
        <Allbtn id="B8" name="Download"></Allbtn>
      </div> */}
      {/* sprint_1 day_2 */}
      {/* <h1> */}
      {/* Problem 1
      </h1>
    <Counter/>

  <h1>Problem 2</h1>
 <div>
 <Todo></Todo>
 </div> */}
      {/* sprint_1 day_3 */}

      {/* <Restaurant></Restaurant> */}

      {/* sprint_1 day_2 */}

      {/* <button onClick={()=> setShowCounter(!ShowCounter)} >
       {
         ShowCounter? "Hide" : "Show"
       }
     </button>
     { ShowCounter && <Todo1></Todo1>} */}
      {/* sprint_2 day_3 */}
      {/* <button className="toggleForm" onClick={()=>{setAuth(!auth)}}>
       
          {auth ? "Add Details":"Shoe Tables"}
     
      </button>
      {auth? <Display/> : <Form/>  } */}
      {/* Show component based on state */}
      {/* sprint_3 day_1 */}
      {/* firts_ass */}
      {/* <Btn/> */}
      {/* second_assignment */}
      {/* <div style={{display:"flex",margin:"auto",width:"70%",marginTop:"50px",justifyContent:"space-between"}}>
         <CReditCard/>
        </div> */}
      {/* sprint_3 day_2 */}
      {/* first_assignment */}
     {/* <ThemeContextProvider>
     <AuthContextProvider>
      <Navbar />
      <Status />
      </AuthContextProvider>
     </ThemeContextProvider> */}
         {/* sprint_3 day_3 */}
         {/* <AuthContextProvider>
        <BrowserRouter>
        <Nav/>
        <Routes>
        <Route path="about" element={ <About/>}/>
        <Route path="login/*" element={  <Login/>}/>
        <Route path="contact" element={   <Contact/>}/>
        <Route path="faq" element={   <FAQ/>}/>
        <Route path="/"  element={<Home/>}>
          <Route path="/blog/:title" element={<Blog/>}/>
        </Route>
        <Route path="cart"  element={<Cart/>}/>
        </Routes>
          <Footer/>
        </BrowserRouter>
        </AuthContextProvider> */}
        {/* sprint_4 day_2 */}
        <Provider store={store}>
            {/* <Counter/> */}
           <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Todos/>}/>
              <Route path="/:id" element={ <SingleTodo/>}/>
            </Routes>
           </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
