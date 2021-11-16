import React from 'react';
import "../../src/index.css"
import "./navtab.scss"

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar">
      <a class="" href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'bg-yellow-100' : 'nav-link'}>Home</a>
      <a class="" href="#intro" onClick={() => handlePageChange('Intro')}>Intro</a>
      <a class="" href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Projects</a>
      <a class="" href="#contact" onClick={() => handlePageChange('Contact')}>Contact Me</a>
    </nav>

  );
}

export default NavTabs;
