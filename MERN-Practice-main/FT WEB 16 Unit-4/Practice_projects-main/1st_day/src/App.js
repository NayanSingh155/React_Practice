
import './App.css';
import MobileManfacturer from "./component/MobileManfacturer";
import MobileOperating from "./component/MobileOperating";
import Button from "./component/Button";
function App() {
  return (
    <div className="App">
    <MobileOperating/>
     <MobileManfacturer/>
     <Button color="#4700D8" name="JOIN US" />
     <Button color="#F900BF" name="SETTINGS" />
     <Button color="#22577E" name="LOGIN" />
     <Button color="#5584AC" name="CONTACT US" />
     <Button color="#FAFFAF" name="SEARCH" />
     <Button color="#333C83" name="HELP" />
     <Button color="#F24A72" name="HOME" />
     <Button color="#EAEA7F" name="DOWNLOAD" />

    </div>
  );
}

export default App;
