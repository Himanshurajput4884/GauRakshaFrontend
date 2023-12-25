import './App.css';
import { Routes, Route } from "react-router-dom";
import SideNavBar from './SideNavBar/SideNavbar.js';
import Home from "./Home/Home.js";
import NavbarExtended from './NavbarExtended/NavbarExtended.js';
import NavBar from './SideNavBar/NavBar.js';
import { useState } from 'react';

function App() {
  const [sideNavBarExpanded, setSideNavBarExpanded] = useState(false);


  const toggleSideNavBar = () =>{
    setSideNavBarExpanded(!sideNavBarExpanded);
  }

  return (
    <div>
      <NavBar toggleSideNavBar={toggleSideNavBar} isExpanded={sideNavBarExpanded} />
      <div className="app-container">
      <div className='sidenavbar-container'>
        <SideNavBar isExpanded={sideNavBarExpanded} toggleSideNavBar={toggleSideNavBar}/>
      </div>
      <div className="main-content">
        <NavbarExtended />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      </div>
    </div>
  );
}

export default App;
