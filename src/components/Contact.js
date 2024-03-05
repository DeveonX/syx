import React from 'react'
import './Contact.css'

function Contact(props) {
  return (
    <div className="contactDiv" id='contactDiv'>
        <h1>Contact</h1>
        <p>In this interconnected world, I'm just a click away. Whether you have a project in mind, a collaboration proposal, or simply want to connect and chat about design, creativity, or shared interests, feel free to reach out.</p>
        <div className="contactCard">
            <div className="contactCardLeft">
                <h2 id='topMostHeading'><img src="fav-location.png" alt="location" className='contactCardImages'/>Location</h2>
                <p>Los Angeles, California, USA</p>
                <h2><img src="fav-email.png" alt="email" className='contactCardImages'/>Email</h2>
                <p>{props.Email}</p>
                <h2><img src="fav-phone.png" alt="phone" className='contactCardImages'/>Phone</h2>
                <p>{props.Phone}</p>
                <div className="locationEmbed">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.8919032667!2d-118.74206691258688!3d34.020037412029644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1709224972023!5m2!1sen!2sin"  height="450" style={{border: "0", width: "90%", borderRadius: "15px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='locationEmbed'></iframe>
                </div>
            </div>
            <div className="contactCardRight">
                <h2><img src="fav-sendMessage.png" alt="message" id='sendMessageImage'/>Send me a message</h2>
                <form onSubmit={()=>{return false}} id="contactForm">
                    <div className="inputField">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="inputField">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="inputField" id='textAreaInputField'>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required />
                    </div>
                    <input type="submit" value="Send" id='messageSubmitButton'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact