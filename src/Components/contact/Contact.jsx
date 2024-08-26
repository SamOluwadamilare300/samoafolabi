import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "./contact.css"

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_px2p85o', 'template_0jip9qi', form.current, {
          publicKey: 'YxHEIBTtkIe_Zl5oT',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Let's Connect</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Hire Me!</h3>

                    <div className="contact__info">

                        <div className="contact__card">
                            <i className="bx bx contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">damilarea71@gmail.com</span>

                            <a href="mailto:examplemail@gmail.com" className="contact__button">Write me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">+234 814 495 4091</span>
                            <a href="https://api.whatsapp.com/send?phone=2348144954091&text=Hello,%20more%20information!" className="contact__button" target="_blank"
                                rel="noopener noreferrer">Chat me{" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>


                        <div className="contact__card">
                            <i className="bx bx contact__card-icon"></i>

                            <h3 className="contact__card-title">LinkedIn</h3>
                            <span className="contact__card-data">Sam O. Afolabi</span>

                            <a href="https://www.linkedin.com/" target='https://www.linkedin.com/in/sam-o-afolabi-179309241/' className="contact__button">
                                Connect with me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me about your project</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
    <div className="contact__form-div">
        <label className="contact__form-tag">Name</label>
        <input
            type="text"
            name='name'
            className="contact__form-input"
            placeholder='Insert your name' />
    </div>

    <div className="contact__form-div">
        <label className="contact__form-tag">Email</label>
        <input
            type="email"
            name='email'
            className="contact__form-input"
            placeholder='Insert your email' />
    </div>

    <div className="contact__form-div contact__form-area">
        <label className="contact__form-tag">Project</label>
        <textarea
            name="project"
            cols="30"
            rows="10"
            className='contact__form-input'
            placeholder='Write your project'>
        </textarea>
    </div>

    <button type="submit" 
            
         
         
         className="contact__button2">
        <svg
            className="contact__button2"
            width="151"
            height="47"
            viewBox="0 0 151 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
                width="151"
                height="47"
                rx="10"
                fill="black" />

            <text
                x="50%"
                y="50%"
                fill="white"
                font-size="16"
                font-family="Arial"
                text-anchor="middle"
                alignment-baseline="middle">
                Send Message
            </text>

            <path d="M25.216 29.128C24.8213 29.128 ... " fill="white" />
            <path d="M127.33 15.17C127.14 14.9822 ... " fill="white" />
        </svg>
    </button>
</form>

                </div>
            </div>
        </section>
    )
}

export default Contact
