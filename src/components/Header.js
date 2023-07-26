import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  return (
    <div className="header" name="main">
      <h1 className="header-h1" href="#">
        Портфолио
      </h1>
      <div className="menu">
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
