import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './Contact';
import Home from './Home';
import "./App.css";
import Footer from './footer';

const App = () => {
  return (
    <div>
      <div  className='mainApp'>
        <Router >
           <Routes>
              <Route path="/" element={<Home />} />
             <Route path="/contact" element={<Contact />} />
           </Routes>
         </Router>
    </div>
    <div>
      <hr style={{width:'90%'}}/>
    <Footer/>
    </div>
    </div>

  )
}

export default App
