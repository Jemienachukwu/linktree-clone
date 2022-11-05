import React from 'react'
import "./App.css";
const Contact = () => {
  return (
    <div className='mainContainer'>
        <h2>Contact Me</h2>
        <p>Hi there contact me to ask me anything you have in mind</p>

        <form className='formContainer'>
            <div className='names'>
                <label className='name'>
                    <p>Name</p>
                    <input type='text' placeholder='Enter your first name' id='first_name'/>
                </label>
                <label className='lastName'>
                    <p>Last Name</p>
                    <input type='text' placeholder='Enter your last name' id='last_name'/>
                </label>
            </div>
            
                <label className='email'>
                    <p>Email</p>
                    <input type='email' placeholder='yourname@email.com' id='email'/>
                </label>
            
            <label className='message'>
                <p>Message</p>
                <input type='textarea' placeholder="send a message and I'll reply as soon as possible..." id='message'/>
            </label>
           <label
            className='check'>
           <input type='checkbox'/>
           <p>
            you agree to provide your data to Nachukwu who may contact you
           </p>
            </label>
            <button className='contactBtn' id='btn__submit'>send message</button>
        </form>
    </div>
  )
}

export default Contact
