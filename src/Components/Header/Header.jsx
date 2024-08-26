import React, { useState } from "react";
import "./header.css";

function Header() {
    const [toggle, showMenu] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                {/* Conditionally render the logo and the toggle icon */}
                {!toggle && (
                    <>
                        <a href="index.html" className="nav__logo">Afolabi</a>
                        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
                            <i className="uil uil-apps"></i>
                        </div>
                    </>
                )}

                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i>Services
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>

                        <li className="nav__item">
                            <button className="nav__link" id="meet-button">
                              <a href="https://calendly.com/" target="https://calendly.com/damilarea71/schedule-meeting" ><i className="uil uil-scenery nav__icon"></i>Schedule Meeting</a>
                            </button>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(false)}></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;
