import React from "react";
import "./navtab.scss";
import { Link } from "react-router-dom";

const NavTabs = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"nav " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <Link to="/reactportfolio" className="logo">Welcome.</Link>
          <div className="itemContainer">
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NavTabs;
