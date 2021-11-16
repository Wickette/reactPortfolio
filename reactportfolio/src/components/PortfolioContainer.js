import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from "./pages/Home/Home"
import Intro from './pages/Intro/Intro';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Intro') {
      return <Intro />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
