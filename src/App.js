import "./App.css";
import './scss/bootstrap.scss'
import Navbar5 from './Components/Navbar5';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./Components/pages/Home";
import { About } from "./Components/pages/About";
import {Contact} from "./Components/pages/Contact";
import Login  from "./Components/pages/Login";
import Registration from './Components/pages/Registration';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <>
      <Router>

        <Navbar5/>
        

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registration" element={<Registration/>} />
            
          </Routes>
        </div>


       

      </Router>

      
  </>
  );
}

export default App;