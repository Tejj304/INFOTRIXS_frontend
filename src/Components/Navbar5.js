import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.css';


function Navbar5() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar" style={{marginLeft:30, marginRight:-30, marginTop:5,}}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo" >
            JOB BOARD
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            
            <li className="nav-item">
              <NavLink
                exact to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Home
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Contact Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Login
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact to="/registration"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Signup/Registration
              </NavLink>
            </li>


          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar5;