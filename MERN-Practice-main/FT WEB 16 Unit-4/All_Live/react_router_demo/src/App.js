
import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Ordersummmary from './components/Ordersummmary';
import NoMatch from "./components/NoMatch";
import Products from './components/Products';
import Featured from './components/Featured';
import NewP from './components/NewP'
function App() {
  return (
    <>
<Navbar/>
   <Routes>
   {/* first use routes then use Route in that put path and element  in element put the component in curly braces  */}
     <Route path='/' element={<Home/>}>   </Route>
       <Route path='/order' element={<Ordersummmary/>}></Route>
 
     <Route path ='/about' element={<About/>}></Route>
     {/* path star means all the pages which have no matching route */}
     <Route path ="*" element={<NoMatch/>}/> 
     <Route path ="products" element={<Products/>}>
     {/* index route is for showing the default page in products like if we want to open 
     the product page then default page should be product page*/}
     <Route index element={<Featured/>}/>
       <Route path ="featured" element={<Featured/>}/>
       <Route path="new" element={<NewP/>}/>
     </Route> 
   </Routes>
   </>
  );
}

export default App;
