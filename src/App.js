import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import { useState } from 'react';
import UpperNavBar from './components/NavBar/UpperNavBar.js';
import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer.js';
import Adopt from './components/Involved/Adopt.js';
import Gallery from './components/Gallery/Gallery.js';
import ContactUs from './components/ContactUs/ContactUs.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import Donate from './components/Involved/Donate.js';
import Activities from './components/Activities/Activities.js';
import SideNavBar from "./components/prev-SideNavBar/SideNavbar.js";
import PaymentSuccess from './components/Involved/PaymentSuccess.js';

const URL = `https://gaushala-backend.onrender.com/`;
// const URL = `http://localhost:8008`;

function App() {
  const [sideNavBarExpanded, setSideNavBarExpanded] = useState(false);


  const toggleSideNavBar = () =>{
    setSideNavBarExpanded(!sideNavBarExpanded);
  }

  return (
    <div>
      <UpperNavBar/>
      <NavBar toggleSideNavBar={toggleSideNavBar}/>
      {/* <NavBar toggleSideNavBar={toggleSideNavBar} isExpanded={sideNavBarExpanded} /> */}
      <div className="app-container">
      <div className='sidenavbar-container'>
        <SideNavBar isExpanded={sideNavBarExpanded} toggleSideNavBar={toggleSideNavBar}/>
      </div>
      <div className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/involve/sponsor' element={<Sponsor />} /> */}
          <Route path='/involve/adopt' element={<Adopt />} />
          <Route path='/involve/donate' element={<Donate />} />
          <Route path='/show/gallery' element={<Gallery />} />
          <Route path='/overview/contact-us' element={<ContactUs />} />
          <Route path='/overview/about-us' element={<AboutUs />} />
          <Route path='/overview/activity' element={<Activities />} />
          <Route path='/paymentsuccess' element={<PaymentSuccess />} />
        </Routes>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
