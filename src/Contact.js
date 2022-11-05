import React from 'react'
import "./App.css";
const Contact = () => {
  
const [formData, setFormData] = React.useState({
    firstname:'',
    lastname:'',
    email:'',
    comments:'',
    checkbox: false,
})

const handleChange = (event) => {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
        }
})
}

  return (
    <div className='mainContainer'>
        <h2>Contact Me</h2>
        <p>Hi there contact me to ask me anything you have in mind</p>

        <form className='formContainer'>
            <div className='names'>
                <label className='name'>
                    <p>Name</p>
                    <input type='text' placeholder='Enter your first name' id='first_name' name='firstname' onChange={handleChange}
                    value={formData.firstname} required/>
                </label>
                <label className='lastName'>
                    <p>Last Name</p>
                    <input type='text' placeholder='Enter your last name' id='last_name' name='lastname'
                    onChange={handleChange}
                    value={formData.lastname} required/>
                </label>
            </div>
            
                <label className='email'>
                    <p>Email</p>
                    <input type='email' placeholder='yourname@email.com' id='email' name='email'
                    onChange={handleChange}
                    value={formData.email}
                    required
                    />
                </label>
            
            <label className='message'>
                <p>Message</p>
                 <textarea
                  id='message'
                  onChange={handleChange}
                  name='comments'
                  value={formData.comments} 
                placeholder="send a message and I'll reply as soon as possible..."
                required
            /> 
                  
            </label>
           <label
            className='check'>
           <input type='checkbox'   checked={formData.checkbox} onChange={handleChange} name='checkbox' id='checkbox' required/>
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
