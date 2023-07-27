import React, { useState } from "react";
import "./Curses.css";

function Curses() {
  const [activeTab, setActiveTab] = useState(null);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="curses" id="curses">
      <div className="curses-blocks">
        <div
          className={`curses-block-1 ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleClick(0)}
          title="Больше информации"
        >
          <icon className="curses-block-1-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="76"
              height="64"
              viewBox="0 0 76 64"
              fill="none"
            >
              <path
                d="M16 22L4 32L16 42"
                stroke="#7B4AE2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M48 22L60 32L48 42"
                stroke="#7B4AE2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M40 10L24 54"
                stroke="#7B4AE2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g filter="url(#filter0_d_21_2879)">
                <circle
                  cx="52"
                  cy="34"
                  r="20"
                  fill="#7B4AE2"
                  fill-opacity="0.2"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_21_2879"
                  x="28"
                  y="14"
                  width="48"
                  height="48"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_21_2879"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_21_2879"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </icon>
          <p className="curses-block-1-p1">Яндекс Практикум</p>
          <p className="curses-block-1-p2">Веб разработчик React.js</p>
        </div>
        <div
          className={`curses-block-1 ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleClick(1)}
          title="Больше информации"
        >
          <icon className="curses-block-1-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                d="M10 14H54V44C54 44.5304 53.7893 45.0391 53.4142 45.4142C53.0391 45.7893 52.5304 46 52 46H42C41.4696 46 40.9609 45.7893 40.5858 45.4142C40.2107 45.0391 40 44.5304 40 44V38H24V52C24 52.5304 23.7893 53.0391 23.4142 53.4142C23.0391 53.7893 22.5304 54 22 54H12C11.4696 54 10.9609 53.7893 10.5858 53.4142C10.2107 53.0391 10 52.5304 10 52V14Z"
                stroke="#7B4AE2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24 30H10"
                stroke="#7B4AE2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24 14V38"
                stroke="#7B4AE2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M40 30H54"
                stroke="#7B4AE2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M40 14V38"
                stroke="#7B4AE2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g filter="url(#filter0_d_21_2891)">
                <circle
                  cx="32"
                  cy="34"
                  r="20"
                  fill="#7B4AE2"
                  fill-opacity="0.2"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_21_2891"
                  x="8"
                  y="14"
                  width="48"
                  height="48"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_21_2891"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_21_2891"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </icon>
          <p className="curses-block-1-p1">GeekBrains</p>
          <p className="curses-block-1-p2">
            Инженер по автоматизации тестирования
          </p>
        </div>
        <div
          className={`curses-block-1 ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleClick(2)}
          title="Больше информации"
        >
          <icon className="curses-block-1-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="76"
              height="64"
              viewBox="0 0 76 64"
              fill="none"
            >
              <path
                d="M16 20H38"
                stroke="#7B4AE2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M50 20H72"
                stroke="#7B4AE2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M44 26C47.3137 26 50 23.3137 50 20C50 16.6863 47.3137 14 44 14C40.6863 14 38 16.6863 38 20C38 23.3137 40.6863 26 44 26Z"
                stroke="#7B4AE2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 50C25.3137 50 28 47.3137 28 44C28 40.6863 25.3137 38 22 38C18.6863 38 16 40.6863 16 44C16 47.3137 18.6863 50 22 50Z"
                stroke="#7B4AE2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M66 50C69.3137 50 72 47.3137 72 44C72 40.6863 69.3137 38 66 38C62.6863 38 60 40.6863 60 44C60 47.3137 62.6863 50 66 50Z"
                stroke="#7B4AE2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M49.95 20.825C53.9094 21.9365 57.4785 24.1344 60.2533 27.1698C63.028 30.2052 64.8974 33.9569 65.65 38"
                stroke="#7B4AE2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.35 38C23.1025 33.9569 24.972 30.2052 27.7467 27.1698C30.5214 24.1344 34.0905 21.9365 38.05 20.825"
                stroke="#7B4AE2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g filter="url(#filter0_d_21_2905)">
                <circle
                  cx="24"
                  cy="34"
                  r="20"
                  fill="#7B4AE2"
                  fill-opacity="0.2"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_21_2905"
                  x="0"
                  y="14"
                  width="48"
                  height="48"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_21_2905"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_21_2905"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </icon>
          <p className="curses-block-1-p1">РГГРУ им. Орджоникидзе</p>
          <p className="curses-block-1-p2">Прикладная математика</p>
        </div>
      </div>
      <div className={`curses-text ${activeTab !== null ? "open" : ""}`}>
        <div className={`curses-text-1 ${activeTab === 0 ? "open" : ""}`}>
          <span>
            Изучил профессию <b>Full-stack веб разработчик.</b> Теперь лучше
            понимаю, чем занимаются разработчики и как фиксят баги. А так же где
            их могут допустить.
          </span>
          <p>Изучил:</p>
          <p>- профессиональную верстку по технологии BEM Nested</p>
          <p>- адаптивную верстку под любые устройства и версии</p>
          <p>- Javascript | ООП</p>
          <p>- React.js</p>
          <p>- JSX</p>
          <p>- WebPack</p>
          <p>- Node.js</p>
          <p>- TypeScript</p>
          <br />
          <br />
          <span>
            Окончил курс: <b>сентябрь 2023</b>
          </span>
        </div>
        <div className={`curses-text-2 ${activeTab === 1 ? "open" : ""}`}>
          <span>
            Изучил профессию <b>Инженер по автоматизации тестирования Java. </b>
            Год учебы и практика на реальных проектах.
          </span>
          <p>Изучил:</p>
          <p>- Теорию тестирования</p>
          <p>- Техники тест дизайна</p>
          <p>- Linux - рабочая станция</p>
          <p>- Кабельные сети</p>
          <p>- API</p>
          <p>- SQL</p>
          <p>- Java Core</p>
          <p>- Selenium</p>
          <p>- jUnit</p>
          <p> и много практики ...</p>
          <br />
          <br />
          <span>
            Окончил курс: <b>сентябрь 2022</b>
          </span>
        </div>
        <div className={`curses-text-3 ${activeTab === 2 ? "open" : ""}`}>
          <span>
            Учился на бюджете в{" "}
            <b>Российском государственном геологоразведочном университете</b> по
            специальности <b>Прикладная математика. </b>
            <br />
            <br />
            Точные науки давались мне легко, но математиком становиться не
            планировал, после второго курса ушел в самообразование и начал
            изучать разработку сайтов на WordPress.
            <br />
            <br />
            Позднее пришлось получить высшее образование по специальности{" "}
            <b>Государственное муниципальное управление.</b>
            <br />
            <br />
          </span>

          <p>Высшее образование получил в 2018</p>
        </div>
      </div>
    </div>
  );
}

export default Curses;
