import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mew3i7k', 'template_28s75vc', form.current, 'ApZJ177TOsabIUqE4')
      .then(() => {
          alert("Sent!")
      }, () => {
          alert("Failed! Try again.")
      });
  };

  return (
    <>
      <div class='container'>
        <h1>Connect with me!</h1>
        <p>Let me know what you think, or if you have any questions or concerns!</p>
        <div className="contact-box">
          <div className="contact-left">
            <h3>Send your request</h3>
            <form ref={form} onSubmit={sendEmail}>

              <div className="input-row">
                <div className="input-group">
                  <label>Name</label>
                  <input type='text' placeholder='John Smith' name='name' required></input>
                </div>
                <div className="input-group">
                  <label>Phone</label>
                  <input type='text' placeholder='123-456-7890' name='phone' required></input>
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input type='text' placeholder='johnsmith@gmail.com' name='email' required></input>
                </div>
                <div className="input-group">
                  <label>Subject</label>
                  <input type='text' placeholder='Something Interesting' name='subject' required></input>
                </div>
              </div>

              <label >Message</label>
              <textarea rows="5" placeholder="Your Message" name="message" required></textarea>

              <button type='submit'>SEND</button>

            </form>
          </div>

          <div className="contact-right">
            <h3 className='reach'>Reach Me!</h3>
            <div className="icons-div">
              <ul class="social">
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jadon-lau" class="lkin">
                  <i class="icon-linkedin"></i></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Mr-Mango753" class="gh">
                  <i class="icon-github"></i></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jadon.lau/" class="insta">
                  <i class="icon-instagram"></ i></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jadonlau753/" class="fb">
                  <i class="icon-facebook"></i></a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact