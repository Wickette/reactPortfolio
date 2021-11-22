import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from "./components/pages/Home/Home"
import Intro from './components/pages/Intro/Intro';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Contact from './components/pages/Contact/Contact';
import Menu from "./components/Menu/Menu"
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "./components/Footer/Footer"


export default function PortfolioContainer() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Router>
      <CssBaseline>
        <NavTabs menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={Intro}/>
            <Route exact path="/projects" component={Portfolio}/>
            <Route exact path="/contact" component={Contact}/>
        </div>
        <Footer/>
      </CssBaseline>
    </Router>
  )
}
