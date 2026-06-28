import React from "react"
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <div className= 'bg-[#060f0b] min-h-screen'>
      <div className = 'flex w-full'> 
        <Sidebar />
        <div className = 'w-[70%] ml-[max(5vw, 25px)] my-8 text-black text-base'>
          <Routes>
              <Route path= "/" element= {<Home />}/>
              <Route path= "/services" element= {<Services/>} />
              <Route path= "/portfolio" element= {<Portfolio/>} />
              <Route path= "/contact" element= {<Contact/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;