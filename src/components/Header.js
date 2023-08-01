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
          className={`header-svg ${!isMenuVisible ? "" : "open-svg"}`}
          width="26px"
          height="26px"
          viewBox="0 0 24.00 24.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="rgba(255, 255, 255, 0.50)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="Menu / Hamburger_MD">
              {" "}
              <path
                id="Vector"
                d="M5 17H19M5 12H19M5 7H19"
                stroke="rgba(255, 255, 255, 0.50)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>{" "}
          </g>
        </svg>
        <svg
          className={`header-svg ${isMenuVisible ? "" : "open-svg"}`}
          width="26px"
          height="26px"
          viewBox="0 0 24.00 24.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#rgba(255, 255, 255, 0.50)"
          transform="rotate(90)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="Menu / Hamburger_MD">
              {" "}
              <path
                id="Vector"
                d="M5 17H19M5 12H19M5 7H19"
                stroke="rgba(255, 255, 255, 0.50)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
        <h1 className="header-h1">
          <Link to="up" smooth={true} duration={500} offset={-70}>
            Портфолио
          </Link>
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
