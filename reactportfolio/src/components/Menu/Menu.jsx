import React from 'react'
import { Link } from 'react-router-dom'
import "./menu.scss"

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <Link to="/home">Home</Link>
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
        </div>
    )
}

export default Menu
