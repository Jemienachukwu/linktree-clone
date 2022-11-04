import React from 'react'
import "./App.css";
import { FaGithub } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import icon  from './icons/Icon.png'
import dots from './icons/dots.png'
function Home() {
  const links = [
    {
      title: "Twitter Link",
      id: "twitter",
      link: "twitter.com",
    },
    {
      title: "Zuri Team",
      id: "btn__zuri",
      link: "https://training.zuri.team/",
    },
    { title: "ZuriBooks", id: "books", link: "http://books.zuri.team" },
    {
      title: "python Books",
      id: "books_python",
      link: "https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>",
    },
    {
      title: "Background Check For Coders",
      id: "pitch",
      link: " https://background.zuri.team",
    },
    {
      title: "Design Books",
      id: "book__design",
      link: "https://books.zuri.team/design-rules ",
    },
    {
      title: "Contact Me",
      id: "contact_me",
      link: "/contact",
    },
 
  ];
  return (
    <div className="App">
      <header>
<div></div>
        <div className='head'>
        <img
          id="profile__img"
          src="https://images.pexels.com/photos/3280901/pexels-photo-3280901.jpeg?cs=srgb&dl=pexels-muhammadtaha-ibrahim-3280901.jpg&fm=jpg&_gl=1*12ka6bq*_ga*MTQ4MjI2Mjc4Ni4xNjY2MjQ3MDc2*_ga_8JE65Q40S6*MTY2NjgwNzUxMi4yLjEuMTY2NjgwNzU1OS4wLjAuMA.."
          alt="img"
        />
        <h1 id="twitter">Nachukwu</h1>
        </div>
        {/* <p id="slack">jemienachukwu</p> */}
        <img src={dots} alt='img'className='dots'/>
        <img src={icon} alt='img' className='icon'/>
      </header>
      <div className="container">
        {links.map((item) => (
          <div key={item.id} className="btn-container">
            <a href={item.link} id={item.id}>
              <button>{item.title}</button>
            </a>
          </div>
        ))}
    
      </div>
      <div className="icons">
        <FaSlack className="icon" />
        <FaGithub className="icon" />
      </div>
  
    </div>
  );
}

export default Home
