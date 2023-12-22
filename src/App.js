// App.js
import './App.css';
import { Routes, Route } from "react-router-dom";
import SideNavBar from './SideNavBar/SideNavbar.js';
import Home from "./Home/Home.js";
import NavbarExtended from './NavbarExtended/NavbarExtended.js';

function App() {
  return (
    <div className="app-container">
      <div className='sidenavbar-container'>
        <SideNavBar />
      </div>
      <div className="main-content">
        <NavbarExtended />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
