import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import { useState } from 'react';
import UpperNavBar from './components/NavBar/UpperNavBar.js';
import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer.js';

function App() {
  // const [sideNavBarExpanded, setSideNavBarExpanded] = useState(false);


  // const toggleSideNavBar = () =>{
  //   setSideNavBarExpanded(!sideNavBarExpanded);
  // }

  return (
    <div>
      <UpperNavBar/>
      <NavBar />
      {/* <NavBar toggleSideNavBar={toggleSideNavBar} isExpanded={sideNavBarExpanded} /> */}
      <div className="app-container">
      {/* <div className='sidenavbar-container'>
        <SideNavBar isExpanded={sideNavBarExpanded} toggleSideNavBar={toggleSideNavBar}/>
      </div> */}
      <div className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
