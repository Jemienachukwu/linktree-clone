import React from 'react'
import "./App.css";
import I4G from './icons/I4G.png'
import ZURI from './icons/Vector.png'
const Footer = () => {
  return (
    <div className='footer'>
        
           <img
            src={ZURI}
            alt="img"
            className="zuri"
          />
           <p>HNG Internship 9 Frontend Task</p>
          <img
            src={I4G}
            alt="img"
            className="ifg"
          />
      
    </div>
  )
}

export default Footer
