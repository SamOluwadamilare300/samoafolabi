import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Sam O. Afolabi</h1>

            <ul className="footer__list">
            <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>
                <li>
                    <a href="#testimonial" className="footer__link">Testimonials</a>
                </li>
            </ul>
            
            <div className="footer__social">
            <a href="https://www.facebook.com/" className="footer__social-link" target='https://web.facebook.com/profile.php?id=100063818870798' >
        <i className="uil uil-facebook"></i>
        </a>

        <a href="https://www.linkedin.com/" className="footer__social-link" target='https://www.linkedin.com/in/sam-o-afolabi-179309241/' >
        <i className="uil uil-linkedin"></i>
        </a>

        <a href="https://www.github.com/" className="footer__social-link" target='https://github.com/SamOluwadamilare300' >
        <i className="uil uil-github-alt"></i>
        </a>
            </div>

            <span className="footer__copy">Made from the Heart, Peace Inc. Lagos.
            </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
