import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="header" name="main">
      <div className="menu-block" onClick={toggleMenu}>
        <svg
          className="header-svg"
          data-name="Слой 1"
          id="Слой_1"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M64,128a64,64,0,1,1,64-64A64.07,64.07,0,0,1,64,128ZM64,4a60,60,0,1,0,60,60A60.07,60.07,0,0,0,64,4Z" />
          <path d="M95,44H33a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z" />
          <path d="M95,66H33a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z" />
          <path d="M95,88H33a2,2,0,0,1,0-4H95a2,2,0,0,1,0,4Z" />
        </svg>
        <h1 className="header-h1" href="#">
          Портфолио
        </h1>
      </div>

      <div className={`menu ${isMenuVisible ? "" : "open-menu"}`}>
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="main" smooth={true} duration={500} offset={-70}>
              Главная
            </Link>
          </li>

          <li className="menu-item">
            <Link to="about" smooth={true} duration={500} offset={-10}>
              Обо мне
            </Link>
          </li>

          <li className="menu-item">
            <Link to="curses" smooth={true} duration={500} offset={-10}>
              Образование
            </Link>
          </li>

          <li className="menu-item">
            <Link to="portfolio" smooth={true} duration={500} offset={-10}>
              Портфолио
            </Link>
          </li>

          <li className="menu-item">
            <Link to="career" smooth={true} duration={500} offset={70}>
              Опыт работы
            </Link>
          </li>

          {/* <li className="menu-item">Контакты</li> */}
        </ul>
      </div>
    </div>
  );
}

export default Header;
