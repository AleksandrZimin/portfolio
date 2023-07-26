import React, { useState } from "react";
import "./Portfolio.css";
import mestojs from "../image/Mestojs.jpg";
import mestoReact from "../image/Mesto-react.jpg";
import adaptiv from "../image/adaptiv.jpg";
import bem from "../image/bem.jpg";
import czc from "../image/404.jpg";
import portfolio from "../image/portfolio.jpg";
import chessbase from "../image/chessbase.jpg";
import galaxy from "../image/galaxy.jpg";
import fs from "../image/fs.jpg";
import onex from "../image/onex.jpg";

function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-up-block">
        <div className="portfolio-name">
          <div className="portfolio-link">
            <icon className="portfolio-link-icon">🔗</icon>
            <p className="portfolio-link-p">Portfolio</p>
          </div>
          <div className="portfolio-name-h2">
            <h2>Мои проекты</h2>
          </div>
        </div>
        <div className="portfolio-buttons">
          <div
            className={`portfolio-btn ${activeTab === 0 ? "active" : ""}`}
            onClick={() => handleClick(0)}
          >
            <icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="40"
                viewBox="0 0 45 40"
                fill="none"
              >
                <path
                  d="M7.5 12.5H21.25"
                  stroke="#7B4AE2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.75 12.5H42.5"
                  stroke="#7B4AE2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 16.25C27.0711 16.25 28.75 14.5711 28.75 12.5C28.75 10.4289 27.0711 8.75 25 8.75C22.9289 8.75 21.25 10.4289 21.25 12.5C21.25 14.5711 22.9289 16.25 25 16.25Z"
                  stroke="#7B4AE2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.25 31.25C13.3211 31.25 15 29.5711 15 27.5C15 25.4289 13.3211 23.75 11.25 23.75C9.17893 23.75 7.5 25.4289 7.5 27.5C7.5 29.5711 9.17893 31.25 11.25 31.25Z"
                  stroke="#7B4AE2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M38.75 31.25C40.8211 31.25 42.5 29.5711 42.5 27.5C42.5 25.4289 40.8211 23.75 38.75 23.75C36.6789 23.75 35 25.4289 35 27.5C35 29.5711 36.6789 31.25 38.75 31.25Z"
                  stroke="#7B4AE2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.7188 13.0156C31.1934 13.7104 33.4241 15.0841 35.1583 16.9812C36.8925 18.8783 38.0609 21.2231 38.5312 23.75"
                  stroke="#7B4AE2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.4688 23.75C11.9391 21.2231 13.1075 18.8783 14.8417 16.9812C16.5759 15.0841 18.8066 13.7104 21.2812 13.0156"
                  stroke="#7B4AE2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="12.5"
                  cy="21.25"
                  r="12.5"
                  fill="#7B4AE2"
                  fill-opacity="0.2"
                />
              </svg>
            </icon>
            <span>Учеба</span>
          </div>
          <div
            className={`portfolio-btn ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleClick(1)}
          >
            <icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="40"
                viewBox="0 0 45 40"
                fill="none"
              >
                <path
                  d="M7.5 12.5H21.25"
                  stroke="#7B4AE2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.75 12.5H42.5"
                  stroke="#7B4AE2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 16.25C27.0711 16.25 28.75 14.5711 28.75 12.5C28.75 10.4289 27.0711 8.75 25 8.75C22.9289 8.75 21.25 10.4289 21.25 12.5C21.25 14.5711 22.9289 16.25 25 16.25Z"
                  stroke="#7B4AE2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.25 31.25C13.3211 31.25 15 29.5711 15 27.5C15 25.4289 13.3211 23.75 11.25 23.75C9.17893 23.75 7.5 25.4289 7.5 27.5C7.5 29.5711 9.17893 31.25 11.25 31.25Z"
                  stroke="#7B4AE2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M38.75 31.25C40.8211 31.25 42.5 29.5711 42.5 27.5C42.5 25.4289 40.8211 23.75 38.75 23.75C36.6789 23.75 35 25.4289 35 27.5C35 29.5711 36.6789 31.25 38.75 31.25Z"
                  stroke="#7B4AE2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.7188 13.0156C31.1934 13.7104 33.4241 15.0841 35.1583 16.9812C36.8925 18.8783 38.0609 21.2231 38.5312 23.75"
                  stroke="#7B4AE2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.4688 23.75C11.9391 21.2231 13.1075 18.8783 14.8417 16.9812C16.5759 15.0841 18.8066 13.7104 21.2812 13.0156"
                  stroke="#7B4AE2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="12.5"
                  cy="21.25"
                  r="12.5"
                  fill="#7B4AE2"
                  fill-opacity="0.2"
                />
              </svg>
            </icon>
            <span>Работа</span>
          </div>
        </div>
      </div>
      <div className={`portfolio-low-block-1 ${activeTab === 0 ? "open" : ""}`}>
        <div className="block-item">
          <span>Сервис Mesto</span>
          <p>Данный проект переписан полностью на React.js</p>
          <div>
            <div className="teg">React.js</div>
          </div>
          <div className="photo">
            <a href="https://github.com/AleksandrZimin/mesto-react">
              <img src={mestoReact} alt="Место реакт"></img>
            </a>
          </div>
        </div>
        <div className="block-item">
          <span>Сервис Mesto</span>
          <p>
            Данный проект написан на чистом javascript. Так же используется API
            для получения данных
          </p>
          <div>
            <div className="teg">Javascript</div>
          </div>
          <div className="photo">
            <a href="https://aleksandrzimin.github.io/mesto/">
              <img src={mestojs} alt="Место JS"></img>
            </a>
          </div>
        </div>
        <div className="block-item">
          <span>Адаптивный сайт</span>
          <p>Адаптирован под большинство современных устройств</p>
          <div>
            <div className="teg">HTML</div>
            <div className="teg">CSS</div>
            <div className="teg">SASS</div>
            <div className="teg">Bootstrap</div>
          </div>
          <div className="photo">
            <a href="https://aleksandrzimin.github.io/russian-travel/">
              <img src={adaptiv} alt="Адаптив"></img>
            </a>
          </div>
        </div>
        <div className="block-item">
          <span>BEM Nested</span>
          <p>
            Структура проекта соответствует стандартам БЭМ, которую широко
            используют во всем мире.
          </p>
          <div>
            <div className="teg">HTML</div>
            <div className="teg">CSS</div>
            <div className="teg">BEM</div>
          </div>
          <div className="photo">
            <a href="https://aleksandrzimin.github.io/how-to-learn/">
              <img src={bem} alt="BEM Nested"></img>
            </a>
          </div>
        </div>
        <div className="block-item">
          <span>Первый проект</span>
          <p>Вступительная работа "Ошибка 404" реализована строго по ТЗ</p>
          <div>
            <div className="teg">HTML</div>
            <div className="teg">CSS</div>
          </div>
          <div className="photo">
            <a href="https://aleksandrzimin.github.io/yandex/">
              <img src={czc} alt="404"></img>
            </a>
          </div>
        </div>
      </div>
      <div className={`portfolio-low-block-2 ${activeTab === 1 ? "open" : ""}`}>
        <div className="block-item">
          <span>Портфолио</span>
          <p>
            Данное портфолио написано на React.js. Еще в процессе разработки
          </p>
          <div>
            <div className="teg">React.js</div>
          </div>
          <div className="photo">
            <img src={portfolio}></img>
          </div>
        </div>
        <div className="block-item">
          <span>ChessBase</span>
          <p>
            Интернет-магазин шахматных продуктов локализованный под рынок СНГ
          </p>
          <div>
            <div className="teg">Bitrix</div>
            <div className="teg">php</div>
            <div className="teg">javascript</div>
          </div>
          <div className="photo">
            <img src={chessbase}></img>
          </div>
        </div>
        <div className="block-item">
          <span>Galaxy Light</span>
          <p>Принимал участие в разработке интернет-магазина света</p>
          <div>
            <div className="teg">HTML</div>
            <div className="teg">CSS</div>
            <div className="teg">Bitrix</div>
            <div className="teg">php</div>
          </div>
          <div className="photo">
            <img src={galaxy}></img>
          </div>
        </div>
        <div className="block-item">
          <span>Fun Sun</span>
          <p>Принимал участие в тестировании веб приложений</p>
          <div>
            <div className="teg">Vue.js</div>
            <div className="teg">React</div>
            <div className="teg">Laravel</div>
          </div>
          <div className="photo">
            <img src={fs}></img>
          </div>
        </div>
        <div className="block-item">
          <span>ONEX</span>
          <p>Внедрил тестирование в большой проект</p>
          <div>
            <div className="teg">Vue.js</div>
            <div className="teg">Laravel</div>
          </div>
          <div className="photo">
            <img src={onex}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
