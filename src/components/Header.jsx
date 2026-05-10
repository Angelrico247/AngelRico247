import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  /*toggle menu*/
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="container nav">
        <a href="index.html" className="nav__logo">
          <svg
            width="18"
            height="84"
            viewBox="0 0 72 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 84L36 0L72 84H55L36 41L17 84H0Z" fill="black" />
          </svg>
        </a>

        <div className={Toggle ? "nav__menu show__menu" : "nav__menu"}>
          <ul className="grid nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <a className="nav__link">
                  <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <a className="nav__link">
                  <i className="uil uil-user nav__icon"></i>About
                </a>
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <a className="nav__link">
                  <i className="uil uil-file nav__icon"></i>Skills
                </a>
              </a>
            </li>

            <li className="nav__item">
              <a href="#portafolio" className="nav__link">
                <a className="nav__link">
                  <i className="uil uil-scenery nav__icon"></i>Portafolio
                </a>
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps nav__icon"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
