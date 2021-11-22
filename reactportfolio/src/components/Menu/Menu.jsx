import React from 'react'
import { Link } from 'react-router-dom'
import "./menu.scss"
import Footer from "../Footer/Footer"

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
    <>
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <Link to="/reactportfolio">Home</Link>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <Link to="/about">About</Link>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <Link to="/projects">Projects</Link>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <Footer/>
        </div>
   
    </>
    )
}

export default Menu
